import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeRewrite from 'rehype-rewrite';
import { remarkImportHtml } from "./html-import-plugin.js";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [
    remarkImportHtml
  ],
  rehypePlugins: [
    [rehypeRewrite]
  ],
});

export default config;
