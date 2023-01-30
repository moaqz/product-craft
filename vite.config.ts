import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import type { UserConfig as VitestConfig } from 'vitest/config';

const config: UserConfig & { test: VitestConfig['test'] } = {
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		includeSource: ['src/**/*.{js,ts,svelte}'],
		setupFiles: ['./setupTest.ts']
	}
};

export default config;
