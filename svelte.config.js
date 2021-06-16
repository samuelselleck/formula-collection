/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import fs from 'fs'

let raw = fs.readFileSync('./src/json/subjects.json')
let data = JSON.parse(raw)

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
			pages: Object.keys(data["metadata"]["languages"]).map(e => `/${e}`)
		}
	}
};

export default config;
