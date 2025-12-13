//V2.0.0配置
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xyai",
  description: "一个想让大家都可以用上AI工具的小站",
  base: '/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: '官网直达', link: 'https://new.xychatai.com/pastel/#/carlist' },
      { text: 'Team店铺', link: 'https://newshop.xychatai.com/' },
      { text: 'xyai站点监控', link: 'https://status.xychatai.com/status/xychatai' },
      // { text: '站长的碎碎念', link: '/boss-index.md' }
    ],

    sidebar: [

      {
        text: '站点介绍',
        items: [
          { text: '介绍', link: 'about-site.md' },
          { text: '套餐说明', link: 'combo.md' },
          { text: '更新日志', link: 'update.md' },
        ]
      },
      {
        text: 'Codex',
        items: [
          { text: '使用说明', link: '/guide/codexstart.md' },
          { text: 'cc-switch配置', link: '/guide/codex-switch.md' }
        ]
      },
            {
        text: 'Claude Code',
        items: [
          { text: '使用说明', link: '/guide/ccstart.md' },
        //{ text: 'cc-switch配置', link: '/guide/claude-switch.md' }
        ]
      },
        {
        text: '镜像',
        items: [
          { text: '使用说明', link: '/guide/mirror.md' },
          //{ text: '常见问题', link: '/question/mirror.md' }
        ]
      },
                  {
        text: 'Team自助',
        items: [
          { text: '使用说明', link: '/guide/team.md' },
        ]
      },
                        {
        text: '常见问题',
        items: [
          { text: '常见问题解答', link: 'faq.md' },
        ]
      }
    ],
     search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录',   // 是替换 “On this page
      level: [1, 2, 3],    
    },

   //页脚
    footer: { 
      message: 'Made with by Xyai Team', 
      copyright: `MIT License|Copyright © ${new Date().getFullYear()} present Evan You`,
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
