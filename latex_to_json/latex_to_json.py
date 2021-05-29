#%%
import zipfile as zip
import json
from pathlib import Path
import os
import re

EXPORT_SRC_FOLDER = "../src/json"

def main():

    with zip.ZipFile(abs_path("source/Formelsamling.zip")) as zip_f:
        with zip_f.open("main.tex", 'r') as tex_f:
            latex = tex_f.read().decode("utf-8")
            latex = remove_comments(latex)
            header = re.findall(r'\\title{(.*)}', latex)[0]
            body = create_tree(latex)
            export_json({"header": header, "body": body})

#--------------------Parse Latex--------------------

def remove_comments(raw):
    return re.sub(r'^%.*\n?', '', raw, flags=re.MULTILINE)

def create_tree(raw, section_name="section"):
    matching = f'\\\\{section_name}\*?{{'
    sections = re.findall(f"{matching}(.*)}}([\s\S]*?)(?={matching}|$)", raw)
    if sections:
        return {to_filename(k):{"header": k, "body": create_tree(v, "sub" + section_name)} for k, v in sections}
    else:
        return find_equations(raw)

def find_equations(raw):
    equations_raw = raw.split("\\begin{equation}")[1:]
    equations = [e.split("\\end{equation}")[0].strip() for e in equations_raw]
    return equations

def export_json(subjects):
    with open(abs_path(f'{EXPORT_SRC_FOLDER}/subjects.json'), "w") as f:
        json.dump(subjects, f, indent=4)

def abs_path(rel):
    script_dir = os.path.dirname(__file__)
    return os.path.join(script_dir, rel)

def to_filename(s):
    name = s
    replacing = {'å': 'a', 'ä': 'a', 'ö': 'o', ' ': '_'}
    for o, n in replacing.items():
        name = name.replace(o, n)
    return name.lower()

if __name__ == "__main__":
    main()


# %%
