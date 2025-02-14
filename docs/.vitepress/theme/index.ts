// import DefaultTheme from 'vitepress/theme'
// import BilibiliPlayer from '../../components/BilibiliPlayer.vue'
// import ImagePreview from '../../components/ImagePreview.vue'

// export default {
//   extends: DefaultTheme,
//   enhanceApp({ app }) {
//     app.component('BilibiliPlayer', BilibiliPlayer)
//     app.component('ImagePreview', ImagePreview)
//   }
// }

import DefaultTheme from 'vitepress/theme'
import BilibiliPlayer from '../../components/BilibiliPlayer.vue'
import CustomUI from '../../components/CustomUI.vue'
import DocCard from '../../components/DocCard.vue'
import VideoPlayer from '../../components/VideoPlayer.vue'
import NotificationModal from '../../components/NotificationModal.vue'

import './custom-font.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件
    app.component('BilibiliPlayer', BilibiliPlayer)
    app.component('CustomUI', CustomUI)
    app.component('DocCard', DocCard)
    app.component('VideoPlayer', VideoPlayer)
    app.component('NotificationModal', NotificationModal)
    // 添加字体预加载
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = '/assets/DouyinSansBold.woff2'
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }
  }
}
