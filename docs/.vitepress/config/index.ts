import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { root } from 'postcss'
// import { pt } from './pt'
// import { ru } from './ru'
// import { es } from './es'
// import { ko } from './ko'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
    // pt: { label: 'Português', ...pt },
    // ru: { label: 'Русский', ...ru },
    // es: { label: 'Español', ...es },
    // ko: { label: '한국어', ...ko }
  }
})
