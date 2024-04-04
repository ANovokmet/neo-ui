import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteHtmlImport } from './html-import-plugin.js';

export default defineConfig({
	plugins: [sveltekit(), viteHtmlImport]
});
