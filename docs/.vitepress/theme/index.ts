// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import '../theme/style.css' // 如果样式放在 .vitepress/style.css
import './custom.css'
export default {
  extends: DefaultTheme,   // VitePress 2 推荐写法
  Layout,                  // 用我们的 Layout 替换默认 Layout
} satisfies Theme
