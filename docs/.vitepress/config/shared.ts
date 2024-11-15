import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export const shared = defineConfig({
  title: 'voicepie爱说派',

  vue: {
    template: {
      compilerOptions: {
        // 添加 video 标签支持
        isCustomElement: (tag) => ['iframe', 'video'].includes(tag)
      }
    }
  },
  vite: {
    assetsInclude: ['**/*.mp4']
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
      /* 原有样式保持不变 */
      :root {
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4169e1 30%, #9370db);
      }

      /* 优化视频容器样式 */
      .video-container {
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 16px auto;
        border-radius: 12px;
        overflow: hidden;
        background-color: #000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        user-select: none;
        -webkit-user-select: none;
      }

      .video-container::before {
        content: "";
        display: block;
        padding-top: 56.25%; /* 16:9 比例 */
      }

      .video-container video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* 改为 cover 以填充整个区域 */
        background-color: #000;
      }

      /* 封面图优化 */
      .video-container video[poster] {
        object-fit: cover;
        object-position: center center;
      }

      /* 控制栏样式优化 */
      .video-container video::-webkit-media-controls-panel {
        background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }

      .video-container video::-webkit-media-controls-time-remaining-display,
      .video-container video::-webkit-media-controls-current-time-display {
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      /* 移动端优化 */
      @media (max-width: 768px) {
        .video-container {
          margin: 12px auto;
          border-radius: 8px;
        }
      }

      /* 暗色模式适配 */
      .dark .video-container {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
      }
      `
    ]
  ],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 27, height: 27 },

    search: {
      provider: 'algolia',
      options: {
        appId: '8H8UHNK4T0',
        apiKey: '35d44d1b8e78f60fde93e68969959abd',
        indexName: 'kikago',
        locales: {
          ...zhSearch
        }
      }
    }
  }
})
