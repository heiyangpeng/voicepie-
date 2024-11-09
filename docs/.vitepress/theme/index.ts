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
import Carousel from '../../components/Carousel.vue'
// 删除 ImagePreview 的引入
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BilibiliPlayer', BilibiliPlayer)
    app.component('Carousel', Carousel)
    // 删除 ImagePreview 组件注册

    // 添加 Fancybox 配置
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        // @ts-ignore
        Fancybox.bind('[data-fancybox]', {
          // Fancybox 配置选项
          infinite: true,
          keyboard: true,
          zoom: true,
          wheel: 'slide',
          touch: true,
          buttons: ['zoom', 'slideShow', 'fullScreen', 'close']
        })
      })
    }
  }
}
