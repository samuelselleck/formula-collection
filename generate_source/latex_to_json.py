#%%
import zipfile as zipf
import json
import os
import re

EXPORT_SRC_FOLDER = "../src/json"
EXPORT_LATEX_FOLDER = "generated"

def main():

    with zipf.ZipFile(abs_path("source/Formelsamling.zip")) as zip_f:
        with zip_f.open("main.tex", 'r') as tex_f:
            latex = tex_f.read().decode("utf-8")
            latex = remove_comments(latex)
            latex = remove_format_commands(latex)
            header = re.findall(r'\\title{(.*)}', latex)[0]
            tree = create_document_tree(latex)
            metadata = extract_metadata(tree["Metadata"])
            del tree["Metadata"]
            body = create_page_tree(tree, metadata)
            export_json({"header": langs(header, metadata), "body": body, "metadata": metadata})
            texfiles = export_latex(latex, metadata)
            generate_pdfs(texfiles)

#--------------------Parse Latex--------------------

def remove_comments(raw):
    return re.sub(r'^%.*\n?', '', raw, flags=re.MULTILINE)

def remove_format_commands(raw):
    return re.sub(r'\\newpage', '', raw)

def create_document_tree(raw, depth=0, max_depth=2):
    if depth <= max_depth:
        section_name = f"{depth*'sub'}section"
        matching = f'\\\\{section_name}\*?{{'
        sections = re.findall(f"{matching}(.*)}}([\s\S]*?)(?={matching}|$)", raw)
        return {k:create_document_tree(v, depth + 1, max_depth) for k, v in sections}
    else:
        return raw

def create_page_tree(document_tree, metadata):
    default = metadata["default_language"]
    page_tree = {}
    for k, v in document_tree.items():
        h = langs(k, metadata)
        if isinstance(v, dict):
            page_tree[to_filename(h[default])] = {
                "header": h,
                "body": create_page_tree(v, metadata)
            }
        else:
            page_tree[to_filename(h[default])] = {
                "header": h,
                "body": {lk:find_equations(lv) for lk, lv in langs(v, metadata).items()},
                "link": find_link(v)
            }

    return page_tree
    

def extract_metadata(metadata):
    languages_raw = metadata["Language Settings"]["Languages"]
    languages = re.findall(r'\\item(.*)\n?', languages_raw, flags=re.MULTILINE)
    languages = dict(tuple([t.strip() for t in s.split("-")]) for s in languages)
    default_lang = metadata["Language Settings"]["Default"].strip()
    return {"languages": languages, "default_language": default_lang}

def find_equations(raw):
    raw = re.sub(r'INTERACTIVE\[\\url{[\s\S]*?}\]', '', raw)
    parts = re.split(r'(\\begin{equation}|\\end{equation}|\$)', raw)

    components = []
    state = {
        "component": None,
        "contents": ""
    }

    def append_component(state):
        component = {"component": state["component"], "body": state["contents"]}
        components.append(component)
        state["component"] = None
        state["contents"] = ""

    for part in parts:
        part = part.strip()
        if not part:
            continue

        if r'\begin{equation}' == part:
            state["component"] = "equation"
        elif r'\end{equation}' == part:
            append_component(state)
        elif '$' == part:
            if state["component"] == "equation":
                state["contents"] += part
            elif state["component"] == "inline_equation":
                append_component(state)
            elif state["component"] is None:
                state["component"] = "inline_equation"
            else:
                raise Exception("Could not parse inline equation inside other env")
        else:
            state["contents"] += part
            if state["component"] is None:
                state["component"] = "text"
                append_component(state)
    
    return components

def find_link(raw):
    link = re.findall(r'INTERACTIVE\[\\url{([\s\S]*?)}\]', raw)
    return link[0] if len(link) > 0 else "NONE"

def langs(raw, metadata):
    language_versions = {}

    def extract_lang(s, i):
        parts = s.group(1).split("/")
        if len(parts) > i:
            return parts[i]
        else:
            return "< Missing Translation >"
    
    for i, k in enumerate(metadata["languages"].keys()):
        language_versions[k] = re.sub(r'\[\[([\s\S]*?)\]\]',lambda s: extract_lang(s, i), raw)
    
    return language_versions

def export_json(subjects):
    with open(abs_path(f'{EXPORT_SRC_FOLDER}/subjects.json'), "w") as f:
        json.dump(subjects, f, indent=4)

def export_latex(latex, metadata): 
    latex = re.sub(r'^%.*\n?', '', latex, flags=re.MULTILINE)
    latex = re.sub(r'\section{Metadata}[\s\S]*?\\newpage', '', latex, flags=re.MULTILINE)
    latex = re.sub(r'INTERACTIVE\[\\url{[\s\S]*?}\]', '', latex)
    texfiles = []
    languages = langs(latex, metadata)
    for lang, tex in languages.items():
        filepath = abs_path(f'{EXPORT_LATEX_FOLDER}/{lang}-complete.tex')
        texfiles.append(filepath)
        with open(filepath, 'w') as f:
            f.write(tex)
    return texfiles

def generate_pdfs(texfiles):
    for f in texfiles:
        os.system(f'pdflatex -output-directory src/static/latex {f}')

def abs_path(rel):
    script_dir = os.path.dirname(__file__)
    return os.path.join(script_dir, rel)

def to_filename(s):
    name = s.lower()
    replacing = {'å': 'a', 'ä': 'a', 'ö': 'o', ' ': '_'}
    for o, n in replacing.items():
        name = name.replace(o, n)
    return name

if __name__ == "__main__":
    main()

