// // docs/.vitepress/theme/index.ts
// import DefaultTheme from 'vitepress/theme'
// import BilibiliPlayer from '../../components/BilibiliPlayer.vue'  // 注意这里的路径修改

// export default {
//   extends: DefaultTheme,
//   enhanceApp({ app }) {
//     app.component('BilibiliPlayer', BilibiliPlayer)
//   }
// }

import DefaultTheme from 'vitepress/theme'
import BilibiliPlayer from '../../components/BilibiliPlayer.vue'
import ImagePreview from '../../components/ImagePreview.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BilibiliPlayer', BilibiliPlayer)
    app.component('ImagePreview', ImagePreview)
  }
}
