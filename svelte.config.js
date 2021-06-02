/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'formulas',
			fallback: null
		}),
		target: '#svelte',
		hydrate: false,
	}
};

export default config;
