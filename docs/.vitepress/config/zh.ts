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
      '/help/': { base: '/help/', items: sidebarHelp() },
      '/readme/': { base: '/readme/', items: sidebarreadme() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },

    footer: {
      message: '我带来语言，你拥有世界',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} kikaGO`
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
    // {
    //   text: '参考',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },
    {
      text: '使用教程',

      link: '/readme/collection',
      activeMatch: '/readme/'
    },
    {
      text: '帮助与支持',
      link: '/help/preface',
      activeMatch: '/help/'
    }
    // {
    //   text: '更新日志',
    //   items: [
    //     { text: 'Android', link: '/releases/android' },
    //     { text: 'Windows', link: '/releases/windows' },
    //     { text: 'macOS', link: '/releases/macos' },

    //     { text: 'IOS', link: '/releases/ios' }
    //   ]
    //   // link: '/guide/what-is-voicepie',
    //   // activeMatch: '/guide/'
    // }

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

function sidebarreadme(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'TransBuds C1 有线通话翻译耳机',
      items: [
        { text: 'Android', link: 'android-c1' },
        { text: 'macOS', link: 'macos-c1' },
        { text: 'Windows', link: 'windows-c1' }
      ]
    },
    {
      text: 'TransBuds C2 有线通话翻译耳机',
      items: [
        { text: 'Android', link: 'android-c2' },
        { text: 'macOS', link: 'macos-c2' },
        { text: 'Windows', link: 'windows-c2' },
        { text: 'IOS', link: 'ios-c2' }
      ]
    },
    {
      text: 'TransBuds W1 Al通话翻译耳机',
      items: [
        { text: 'Android', link: 'android-w1' },
        { text: 'macOS', link: 'macos-w1' },
        { text: 'Windows', link: 'windows-w1' }
      ]
    },
    {
      text: 'TransMic 无线翻译领夹麦',
      items: [
        { text: 'Android', link: 'android-m1' },
        { text: 'macOS', link: 'macos-m1' },
        { text: 'Windows', link: 'windows-m1' }
      ]
      // link: '/guide/what-is-voicepie',
      // activeMatch: '/guide/'
    },
    {
      text: 'AI精灵',
      items: [
        { text: 'Android', link: 'android-d1' },
        { text: 'macOS', link: 'macos-d1' },
        { text: 'Windows', link: 'windows-d1' }
      ]
      // link: '/guide/what-is-voicepie',
      // activeMatch: '/guide/'
    },

    { text: '苹果手机直播定制设备', link: 'iphone-custom' }
  ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
  return [
    // {
    //   text: '产品使用前预知',
    //   collapsed: false,
    //   items: [
    //     { text: '系统支持', link: 'system' },
    //     { text: '必要权限', link: 'competence' }
    //   ]
    // },
    {
      text: '通用问题',
      collapsed: false,
      items: [
        { text: '多端系统支持条件', link: 'system' },
        { text: '使用时翻译不准确', link: 'common-accuracy' },
        { text: '必要授予权限设置', link: 'competence' }
        // { text: '', link: '' },
      ]
    },
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
      items: [{ text: '听不到声音或不翻译', link: 'mac-sound' }]
    },
    {
      text: 'Windows',
      collapsed: false,
      items: [
        { text: '干净卸载驱动程序', link: 'windows-3' },
        { text: '安装失败!文件不存在!', link: 'windows-1' },
        { text: '遇到驱动报错[代码52]', link: 'windows-2' },
        { text: '无法与服务器建立连接', link: 'windows-4' }
      ]
    }
    // {
    //   text: 'IOS',
    //   collapsed: false,
    //   items: [
    //     { text: '画中画', link: 'system' }
    //     // { text: '必要权限', link: 'competence' },
    //   ]
    // },

    // { text: '常用问题', base: '/help/', link: 'currency' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '产品概述', link: 'what-is-voicepie' },
        { text: '应用下载', link: 'install' }
      ]
    },
    // {
    //   text: '产品说明',
    //   collapsed: false,
    //   items: [
    //     { text: '有线翻译耳机', link: 'README-c1' },
    //     { text: '蓝牙翻译耳机', link: 'README-w1' },
    //     { text: '直播翻译设备', link: 'README-m1' }
    //   ]
    // },
    {
      text: '核心功能',
      collapsed: false,
      items: [
        { text: '翻译模式', link: 'modes-collection' },
        { text: '播报设置', link: 'settings' },
        { text: '语种/音色选择', link: 'language' },
        { text: '其它功能', link: 'other' }
      ]
    },
    // {
    //   text: '应用详解',
    //   collapsed: false,
    //   items: [
    //     { text: 'android', link: 'android' },
    //     { text: 'macOS', link: 'macos' },
    //     { text: 'windows', link: 'windows' }

    //     // { text: 'windows', link: '' }
    //   ]
    // },
    // {
    //   text: '设置与偏好',
    //   collapsed: false,
    //   items: [
    //     // { text: '通话传译模式', link: 'README-c1' },
    //     // { text: '在线直播模式', link: 'README-w1' },
    //     // { text: '影音翻译模式', link: 'README-m1' },
    //     // { text: '现场听译模式', link: 'README-m1' },
    //     // { text: '面对面模式', link: 'README-m1' },
    //   ]
    // },

    { text: '联系我们', link: 'faq' }
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
