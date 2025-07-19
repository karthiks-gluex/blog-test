import path from "path"
import { fileURLToPath } from "url"

import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import tailwind from "@tailwindcss/vite"
import type { AstroIntegration } from "astro"
import compress from "astro-compress"
import icon from "astro-icon"
import pagefind from "astro-pagefind"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import linkCard from "remark-link-card-plus"
import rehypeSlug from "rehype-slug"
import rehypeAutolink from "rehype-autolink-headings"

import astrowind from "./vendor/astrowind"
import { lazyImagesRehypePlugin, readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from "./vendor/plugins"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const hasExternalScripts = false
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : []

export default defineConfig({
  // output: "static",
  site: "https://karthiks-gluex.github.io",
  base: "blog-test",

  integrations: [
    sitemap(),
    mdx(),
    pagefind(),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ["dataLayer.push"] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: "./config.yaml",
    }),
  ],

  image: {
    domains: ["cdn.pixabay.com"],
  },

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: { theme: "github-dark-dimmed" },
    remarkPlugins: [
      remarkGfm,
      readingTimeRemarkPlugin,
      linkCard,
      [remarkToc, { tight: true, heading: "## Table of contents" }],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolink, { behaviour: "wrap" }],
      responsiveTablesRehypePlugin,
      lazyImagesRehypePlugin,
    ],
  },

  vite: {
    plugins: [tailwind()],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".d.ts"],
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
})
