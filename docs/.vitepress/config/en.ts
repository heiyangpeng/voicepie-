import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Connect the world simply',

  themeConfig: {
    nav: nav(),

    // sidebar: {
    //   '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    //   '/en/reference/': { base: '/en/reference/', items: sidebarReference() }
    // },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      message: 'I bring the language, you own the world',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} voicepie爱说派`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/en/guide/what-is-vitepress',
      activeMatch: '/en/guide/'
    },
    {
      text: 'Reference',
      link: '/en/reference/site-config',
      activeMatch: '/en/reference/'
    }
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

// function sidebarGuide(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: 'Introduction',
//       collapsed: false,
//       items: [
//         { text: 'What is VitePress?', link: 'what-is-vitepress' },
//         { text: 'Getting Started', link: 'getting-started' },
//         { text: 'Routing', link: 'routing' },
//         { text: 'Deploy', link: 'deploy' }
//       ]
//     },
//     {
//       text: 'Writing',
//       collapsed: false,
//       items: [
//         { text: 'Markdown Extensions', link: 'markdown' },
//         { text: 'Asset Handling', link: 'asset-handling' },
//         { text: 'Frontmatter', link: 'frontmatter' },
//         { text: 'Using Vue in Markdown', link: 'using-vue' },
//         { text: 'Internationalization', link: 'i18n' }
//       ]
//     },
//     {
//       text: 'Customization',
//       collapsed: false,
//       items: [
//         { text: 'Using a Custom Theme', link: 'custom-theme' },
//         {
//           text: 'Extending the Default Theme',
//           link: 'extending-default-theme'
//         },
//         { text: 'Build-Time Data Loading', link: 'data-loading' },
//         { text: 'SSR Compatibility', link: 'ssr-compat' },
//         { text: 'Connecting to a CMS', link: 'cms' }
//       ]
//     },
//     {
//       text: 'Experimental',
//       collapsed: false,
//       items: [
//         { text: 'MPA Mode', link: 'mpa-mode' },
//         { text: 'Sitemap Generation', link: 'sitemap-generation' }
//       ]
//     },
//     { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
//   ]
// }

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: 'Reference',
//       items: [
//         { text: 'Site Config', link: 'site-config' },
//         { text: 'Frontmatter Config', link: 'frontmatter-config' },
//         { text: 'Runtime API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: 'Default Theme',
//           base: '/en/reference/default-theme-',
//           items: [
//             { text: 'Overview', link: 'config' },
//             { text: 'Nav', link: 'nav' },
//             { text: 'Sidebar', link: 'sidebar' },
//             { text: 'Home Page', link: 'home-page' },
//             { text: 'Footer', link: 'footer' },
//             { text: 'Layout', link: 'layout' },
//             { text: 'Badge', link: 'badge' },
//             { text: 'Team Page', link: 'team-page' },
//             { text: 'Prev / Next Links', link: 'prev-next-links' },
//             { text: 'Edit Link', link: 'edit-link' },
//             { text: 'Last Updated Timestamp', link: 'last-updated' },
//             { text: 'Search', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' }
//           ]
//         }
//       ]
//     }
//   ]
// }