import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xyai",
  description: "一个想让大家都可以用上AI工具的小站",
  base: '/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '站长的碎碎念', link: '/boss-index.md' }
    ],

    sidebar: [

      {
        text: '套餐简介',
        items: [
          { text: '使用说明', link: 'combo.md' },
        ]
      },
      {
        text: 'Codex',
        items: [
          { text: '使用说明', link: '/guide/codexstart.md' },
          { text: '常见问题', link: '/question/codexq.md' }
        ]
      },
            {
        text: 'Claude Code',
        items: [
          { text: '使用说明', link: '/guide/ccstart.md' },
          { text: '常见问题', link: '/question/claudecodeq.md' }
        ]
      },
        {
        text: '镜像',
        items: [
          { text: '使用说明', link: '/guide/mirror.md' },
          { text: '常见问题', link: '/question/mirror.md' }
        ]
      },
                  {
        text: 'Team自助',
        items: [
          { text: '使用说明', link: '/guide/team.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
