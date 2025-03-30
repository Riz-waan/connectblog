// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rizwaan.me',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    },
    remarkPlugins: [
      [remarkGfm, {
        footnotes: {
          clobberPrefix: 'user-content-',
          backLabel: () => 'Back to content',
          labelTagName: 'h2',
          labelAttributes: 'class="sr-only"',
          label: 'References'
        }
      }],
      [remarkToc, { heading: "contents" }]
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'append' }]
    ]
  }
});