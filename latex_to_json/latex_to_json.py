#%%
import zipfile as zip
import json
from pathlib import Path

EXPORT_SRC_FOLDER = "../src/json"

def main():
    with zip.ZipFile("source/Formelsamling.zip") as zip_f:
        with zip_f.open("main.tex", 'r') as tex_f:
            latex = tex_f.read().decode("utf-8")
            sections = latex.split("\\section{")
            header_raw, *subjects_raw = sections
            header = header_raw.split("\\title{", 1)[1].split("}", 1)[0]
            subjects = dict(to_subject(s) for s in subjects_raw)
            export_json({"header": header, "subjects": subjects})

#--------------------Parse Latex--------------------

def to_subject(raw):
    header, body = raw.split("}", 1)
    sections = body.split("\subsection{")
    c_header, *categories_raw = sections
    if categories_raw:
        categories = dict(to_category(c) for c in categories_raw)
    else:
        categories = {}
    return (to_filename(header), {"header": header, "categories": categories})

def to_category(raw):
    header, body = raw.split("}", 1)
    equations = find_equations(body)
    return (to_filename(header), {"header": header, "equations": equations})

def find_equations(raw):
    equations_raw = raw.split("\\begin{equation}")[1:]
    equations = [e.split("\\end{equation}")[0].strip() for e in equations_raw]
    return equations

def export_json(subjects):
    with open(f'{EXPORT_SRC_FOLDER}/subjects.json', "w") as f:
        json.dump(subjects, f, indent=4, sort_keys=True)


def to_filename(s):
    name = s
    replacing = {'å': 'a', 'ä': 'a', 'ö': 'o', ' ': '_'}
    for o, n in replacing.items():
        name = name.replace(o, n)
    return name.lower()

if __name__ == "__main__":
    main()


# %%
