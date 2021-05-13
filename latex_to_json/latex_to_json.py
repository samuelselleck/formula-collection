#%%
import zipfile as zip
import json
from pathlib import Path

EXPORT_SRC_FOLDER = "../src/json_collection"

def main():
    with zip.ZipFile("source/Formelsamling.zip") as zip_f:
        with zip_f.open("main.tex", 'r') as tex_f:
            latex = tex_f.read().decode("utf-8")
            sections = latex.split("\\section{")
            doc_header, *subjects_raw = sections

            subjects = dict(to_subject(s) for s in subjects_raw)
            export(subjects)

#--------------------Parse Latex--------------------

def to_subject(raw):
    header, body = raw.split("}", 1)
    sections = body.split("\subsection{")
    c_header, *categories_raw = sections
    if categories_raw:
        categories = dict(to_category(c) for c in categories_raw)
    else:
        categories = {}
    return (header, categories)

def to_category(raw):
    header, body = raw.split("}", 1)
    equations = find_equations(body)
    return (header, equations)

def find_equations(raw):
    equations_raw = raw.split("\\begin{equation}")[1:]
    equations = [e.split("\\end{equation}")[0].strip() for e in equations_raw]
    return equations

#--------------------Export to JSON--------------------

def export(subjects):
    subjects_export = [
        {
            "url": to_filename(s),
            "header": s,
        }
        for s in subjects.keys()
    ]

    export_json('', "subjects", subjects_export)

    for subject, categories in subjects.items():
        url = to_filename(subject)
        categories_export = [
            {
                "url": f'{url}/{to_filename(c)}',
                "header": c,
            }
            for c in categories.keys()
        ]

        export_json(f'subjects/{url}', url, categories_export)

        for category, equations in categories.items():
            equations_export = equations
            c_url = to_filename(category)
            export_json(f'subjects/{url}/{c_url}', c_url, equations_export)



def export_json(path, name, obj):
    p = f'{EXPORT_SRC_FOLDER}/{path}'
    Path(p).mkdir(parents=True, exist_ok=True)
    with open(f'{p}/{name}.json', "w") as f:
        json.dump(obj, f)

def to_filename(s):
    name = s
    replacing = {'å': 'a', 'ä': 'a', 'ö': 'o', ' ': '_'}
    for o, n in replacing.items():
        name = name.replace(o, n)
    return name.lower()

if __name__ == "__main__":
    main()


# %%
