import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '轻松连接世界',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      // '/reference/': { base: '/reference/', items: sidebarReference() },
      '/help/': { base: '/help/', items: sidebarHelp() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },

    footer: {
      message: '我带来语言，你拥有世界',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} voicepie爱说派`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/guide/what-is-voicepie',
      activeMatch: '/guide/'
    },
    // {
    //   text: '参考',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
    {
      text: '帮助与支持',
      link: '/help/preface',
      activeMatch: '/help/'
    }
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '产品使用前预知',
      collapsed: false,
      items: [
        { text: '系统支持', link: 'system' },
        { text: '必要权限', link: 'competence' }
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
      text: 'Android',
      collapsed: false,
      items: [
        // { text: 'mtk芯片实体通话无法使用', link: 'mtk' },
        { text: '华为荣耀面对面设置', link: 'huawei-audio' },
        { text: '耳机设备插入未识别', link: 'unidentified' },
        { text: '使用翻译时没有声音', link: 'nosound' },
        { text: '使用时出现重复翻译', link: 'chongfu' }
        // { text: '必要权限', link: 'competence' },
      ]
    },
    {
      text: 'macOS',
      collapsed: false,
      items: [{ text: '系统音频设置', link: 'mac-sound' }]
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
      text: '通用问题',
      collapsed: false,
      items: [
        { text: '使用时翻译不准确', link: 'common-accuracy' }
        // { text: '', link: '' },
      ]
    }

    // { text: '常用问题', base: '/help/', link: 'currency' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是voicepie爱说派', link: 'what-is-voicepie' },
        { text: '产品介绍', link: 'product-overview' },
        { text: '快速开始', link: 'quick-start' }
      ]
    },
    {
      text: '产品指南',
      collapsed: false,
      items: [
        { text: '有线翻译耳机', link: 'cable' },
        { text: 'TWS蓝牙耳机', link: 'Bluetooth' },
        { text: '直播领夹麦', link: 'live microphone' }
      ]
    },

    { text: '联系我们', link: 'contact-us' }
  ]
}

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '参考',
//       items: [
//         { text: '站点配置', link: 'site-config' },
//         { text: 'frontmatter 配置', link: 'frontmatter-config' },
//         { text: '运行时 API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: '默认主题',
//           base: '/reference/default-theme-',
//           items: [
//             { text: '概览', link: 'config' },
//             { text: '导航栏', link: 'nav' },
//             { text: '侧边栏', link: 'sidebar' },
//             { text: '主页', link: 'home-page' },
//             { text: '页脚', link: 'footer' },
//             { text: '布局', link: 'layout' },
//             { text: '徽章', link: 'badge' },
//             { text: '团队页', link: 'team-page' },
//             { text: '上下页链接', link: 'prev-next-links' },
//             { text: '编辑链接', link: 'edit-link' },
//             { text: '最后更新时间戳', link: 'last-updated' },
//             { text: '搜索', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' }
//           ]
//         }
//       ]
//     }
//   ]
// }

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
