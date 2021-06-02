/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'formulas',
			fallback: null,
		}),
		target: '#svelte',
	}
};

export default config;
