import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

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
    config(md: any) {
      // 配置图片预览
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery'
      })

      // 处理图片渲染
      const defaultRender =
        md.renderer.rules.image || md.renderer.renderToken.bind(md.renderer)
      md.renderer.rules.image = (
        tokens: any[],
        idx: number,
        options: any,
        env: any,
        self: any
      ) => {
        const token = tokens[idx]
        if (token.attrSet) {
          token.attrSet('data-fancybox', 'gallery')
        } else {
          token.attrs = token.attrs || []
          token.attrs.push(['data-fancybox', 'gallery'])
        }
        return defaultRender(tokens, idx, options, env, self)
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
    // 添加 Fancybox CSS
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'
      }
    ],
    // 添加 Fancybox JS
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'
      }
    ],
    // 添加自定义样式
    [
      'style',
      {},
      `
      :root {
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4169e1 30%, #9370db);
      }

      /* Fancybox 自定义样式 */
      .fancybox__container {
        --fancybox-bg: rgba(0, 0, 0, 0.85);
      }

      /* 文档中的图片样式 */
      .vp-doc img {
        cursor: zoom-in;
        transition: all 0.3s ease;
      }

      .vp-doc img:hover {
        transform: scale(1.02);
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
