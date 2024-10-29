// import { defineConfig } from 'vitepress'
// import { search as zhSearch } from './zh'

// export const shared = defineConfig({
//   title: 'voicepie爱说派',

//   vue: {
//     template: {
//       compilerOptions: {
//         isCustomElement: (tag) => ['iframe'].includes(tag)
//       }
//     }
//   },

//   rewrites: {
//     'zh/:rest*': ':rest*'
//     /** zh/: **/
//   },

//   lastUpdated: true,
//   cleanUrls: true,
//   metaChunk: true,

//   markdown: {
//     math: true,
//     codeTransformers: [
//       // We use `[!!code` in demo to prevent transformation, here we revert it back.
//       {
//         postprocess(code) {
//           return code.replace(/\[\!\!code/g, '[!code')
//         }
//       }
//     ]
//   },

//   sitemap: {
//     hostname: 'https://vitepress.dev',
//     transformItems(items) {
//       return items.filter((item) => !item.url.includes('migration'))
//     }
//   },

//   /* prettier-ignore */
//   head: [
//     ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
//     ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
//     ['meta', { name: 'theme-color', content: '#5f67ee' }],
//     ['meta', { property: 'og:type', content: 'website' }],
//     ['meta', { property: 'og:locale', content: 'en' }],
//     ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
//     ['meta', { property: 'og:site_name', content: 'VitePress' }],
//     ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
//     ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
//     ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
//   ],

//   themeConfig: {
//     logo: { src: '/vitepress-logo-mini.svg', width: 27, height: 27 },

//     // socialLinks: [
//     //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     // ],

//     // nav: [
//     //   // 其他导航项...
//     //   { text: '下载', link: '/install' },
//     // ],
//     // sidebar: {
//     //   '/install': []
//     // },

//     search: {
//       provider: 'algolia',
//       options: {
//         appId: '8J64VVRP8K',
//         apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
//         indexName: 'vitepress',
//         locales: {
//           ...zhSearch
//         }
//       }
//     }

//     // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' } 广告
//   }
// })
import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  title: 'voicepie爱说派',

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['iframe'].includes(tag)
      }
    }
  },

  rewrites: {
    'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    // 添加图片处理配置
    config: (md) => {
      const defaultRender = md.renderer.rules.image
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const src = token.attrGet('src')
        const alt = token.attrGet('alt')

        // 使用自定义组件处理图片
        return `<ImageViewer src="${src}" alt="${alt}" />`
      }
    }
  },

  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }
    ],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'VitePress | Vite & Vue Powered Static Site Generator'
      }
    ],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vitepress.dev/vitepress-og.jpg'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    // 添加样式
    [
      'style',
      {},
      `
      :root {
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4169e1 30%, #9370db);
      }
    `
    ]
  ],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 27, height: 27 },

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress',
        locales: {
          ...zhSearch
        }
      }
    }
  }
})
