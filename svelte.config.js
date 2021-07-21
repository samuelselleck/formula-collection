/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import fs from 'fs'

let raw = fs.readFileSync('./src/json/subjects.json')
let data = JSON.parse(raw)
let baseLangUrls = Object.keys(data["metadata"]["languages"]).map(e => `/${e}`)

let interactiveFiles = fs.readdirSync('./src/routes/[lang]/interactive').map(f => f.replace(/\.[^/.]+$/, ""))
let interactiveUrls = interactiveFiles.flatMap(i => baseLangUrls.map(b => `${b}/interactive/${i}`))

const config = {
	kit: {
		adapter: adapter({
			pages: 'formulas',
			fallback: null,
		}),
		target: '#svelte',
		files: {
			assets: 'src/static'
		},
		prerender: {
			pages: ["/", ...baseLangUrls, ...interactiveUrls]
		}
	}
};

export default config;
