// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import BilibiliPlayer from '../../components/BilibiliPlayer.vue'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'
import './style.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BilibiliPlayer', BilibiliPlayer)
  },
  setup() {
    const route = useRoute()

    const initZoom = () => {
      mediumZoom('div[class*="content"] img', {
        background: 'var(--vp-c-bg)',
        margin: 24,
        scrollOffset: 40,
        container: {
          top: 28,
          bottom: 28,
          right: 28,
          left: 28
        }
      })
    }

    // 主题初始化
    const initTheme = () => {
      const htmlElement = document.documentElement
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (darkMode) {
        htmlElement.classList.add('dark')
      }
    }

    onMounted(() => {
      initZoom()
      initTheme()
    })

    watch(
      () => route.path,
      () =>
        nextTick(() => {
          initZoom()
        })
    )
  }
}
