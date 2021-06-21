import tree from "../json/subjects.json"

export function getSubjects(lang) {
    let header = tree.header[lang]
	let s = tree.body
	let subjects = Object.keys(s).map(e => {
        return {url: `/${lang}/${e}`, header: s[e].header[lang]};
    })
    return {header, subjects}
}

export function getCategories(lang, subject) {
    let header = tree.body[subject].header[lang]
    let s = tree.body[subject].body
    let categories = Object.keys(s).map(e => {
        return {url: `/${lang}/${subject}/${e}`, header: s[e].header[lang]};
    })
    return {header, categories}
}

export function getEquations(lang, subject, category) {
    const equationPage = tree.body[subject].body[category]
    const s = equationPage.body
    let paragraphs = Object.keys(s).map(e => {
        let link = s[e].link
        let url = link.includes("http") ? link : `/${lang}/interactive/${s[e].link}`;
        return {
            header: s[e].header[lang],
            parts: s[e].body[lang],
            url};
    })
    let header = equationPage.header[lang]
    console.log(paragraphs)
    return {paragraphs, header}
    
}