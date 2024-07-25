import { defineConfig } from 'astro/config';
// import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import compressor from "astro-compressor";

import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: 'https://scooter1337.github.io',
    base: process.env.NODE_ENV === 'development' ? undefined : 'portfolio',
    trailingSlash: 'never',

    prefetch: {
        defaultStrategy: 'load',
        prefetchAll: true
    },
    integrations: [
        // partytown(),
        svelte(),
        sitemap(),
        markdoc(),
        tailwind({ applyBaseStyles: false }),
        robotsTxt(),
        compress({
            CSS: {
                csso: true,
                lightningcss: {
                    minify: true
                }
            },
            HTML: true,
            JavaScript: true,
            SVG: true
        }),
        compressor(),
        solidJs(),
        mdx()
    ]
});