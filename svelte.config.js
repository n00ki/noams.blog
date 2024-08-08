import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { bundledLanguages, createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await createHighlighter({ themes: ['nord'], langs: Object.keys(bundledLanguages) });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'nord' }));
      return `{@html \`${html}\`}`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    alias: {
      $components: 'src/lib/components',
      '$components/*': 'src/lib/components/*'
    }
  },
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
