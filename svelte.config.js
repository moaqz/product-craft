import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'#routes': 'src/routes',
			'#components': 'src/lib/components',
			'#utils': 'src/lib/utils',
			'#data': 'src/lib/data'
		}
	}
};

export default config;
