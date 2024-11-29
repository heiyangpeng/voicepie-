import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Connect the world simply',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/help/': { base: '/en/help/', items: sidebarHelp() },
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/readme/': { base: '/en/readme/', items: sidebarreadme() }

      // '/en/reference/': { base: '/en/reference/', items: sidebarReference() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    footer: {
      message: 'I bring the language, you own the world',
      copyright: `All rights reserved © 2019-${new Date().getFullYear()} voicepie`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Product Manual',

      link: '/en/readme/collection',
      activeMatch: '/en/readme/'
    },
    {
      text: 'Help&Support',
      link: '/en/help/preface',
      activeMatch: '/en/help/'
    }
    // {
    //   text: 'Guide',
    //   link: '/en/guide/what-is-vitepress',
    //   activeMatch: '/en/guide/'
    // },
    // {
    //   text: 'Reference',
    //   link: '/en/reference/site-config',
    //   activeMatch: '/en/reference/'
    // }
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

function sidebarreadme(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'TransBuds',
      items: [
        { text: 'android', link: 'android-c1' },
        { text: 'macos', link: 'macos-c1' },
        { text: 'windows', link: 'windows-c1' }
      ]
    },
    {
      text: 'TransBuds W1',
      items: [
        { text: 'android', link: 'android-w1' },
        { text: 'macos', link: 'macos-w1' },
        { text: 'windows', link: 'windows-w1' }
      ]
    },
    {
      text: 'TransMic',
      items: [
        { text: 'android', link: 'android-m1' },
        { text: 'macos', link: 'macos-m1' },
        { text: 'windows', link: 'windows-m1' }
      ]
      // link: '/guide/what-is-voicepie',
      // activeMatch: '/guide/'
    },
    { text: 'Bluetooth receiver', link: 'dongle' }
  ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Product Usage Notes ',
      collapsed: false,
      items: [
        { text: 'System Requirements', link: 'system' },
        { text: 'Required Permissions', link: 'competence' }
      ]
    },
    // {
    //   text: 'Windows',
    //   collapsed: false,
    //   items: [
    //     // { text: '系统支持', link: 'system' },
    //     // { text: '必要权限', link: 'competence' },
    //   ]
    // },
    {
      text: 'Android FAQ',
      collapsed: false,
      items: [
        // { text: 'mtk芯片实体通话无法使用', link: 'mtk' },
        { text: 'Huawei/Honor settings', link: 'huawei-audio' },
        { text: 'Earphones not detected', link: 'unidentified' },
        { text: 'No audio during translation', link: 'nosound' },
        { text: 'Duplicate translation', link: 'chongfu' }
        // { text: '必要权限', link: 'competence' },
      ]
    },
    {
      text: 'macOS FAQ',
      collapsed: false,
      items: [{ text: 'System audio settings', link: 'mac-sound' }]
    },
    // {
    //   text: 'IOS',
    //   collapsed: false,
    //   items: [
    //     { text: '画中画', link: 'system' }
    //     // { text: '必要权限', link: 'competence' },
    //   ]
    // },
    {
      text: 'Windows FAQ',
      collapsed: false,
      items: [
        { text: 'Clean Uninstall Driver', link: 'windows-3' },
        { text: 'Installation Failed: File Not Found!', link: 'windows-1' },
        { text: 'Driver Error [Code 52]', link: 'windows-2' },
        { text: 'Unable to Connect to Server', link: 'windows-4' }
      ]
    },
    {
      text: 'General Issues',
      collapsed: false,
      items: [
        { text: 'Translation is inaccurate', link: 'common-accuracy' }
        // { text: '', link: '' },
      ]
    }

    // { text: '常用问题', base: '/help/', link: 'currency' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Product Overview', link: 'what-is-voicepie' },
        { text: 'Download', link: 'install' }
      ]
    },
    {
      text: 'Detailed Features',
      collapsed: false,
      items: [
        { text: 'Translation Mode', link: 'modes' },
        { text: 'Broadcast Settings', link: 'settings' },
        { text: 'Language/Voice Selection', link: 'language' },
        { text: 'Other Features', link: 'other' }
      ]
    },

    { text: 'Contact Us', link: 'faq' }
  ]
}

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
