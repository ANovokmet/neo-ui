import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";


/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  
  kit: {
    // outDir: 'docs',
		paths: {
			base: process.env.NODE_ENV == 'production' ? '/neo-ui' : ''
		},
    adapter: adapter({ pages: 'docs' }),
  },

  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
