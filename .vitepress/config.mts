import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "Yilu-Website",
  description: "一路招新官网",
  themeConfig: {
    logo: '/yilu-logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '2024秋季招新🖐️ ', link: '/Recruitment/item1' },
      { text: '基础知识📖', link: '/BasicKnowledge/item1' },
      { text: '前端🫧', link: '/markdown-frontEnd/item1' },
      { text: '后端✨', link: '/markdown-backEnd/item1' },
      { text: '机器学习🤖', link: '/markdown-MachineLearning/item1' }
    ],
    // 侧边导航栏
    sidebar: [
      {
        text: '2024秋季招新🖐️',
        items: [
          { text: '工作室简介', link: '/Recruitment/item1' },
          { text: '学习的小建议', link: '/Recruitment/item2' },
        ]
      },
      {
        text: '基础知识📖',
        items: [
          { text: '程序员必备', link: '/BasicKnowledge/item1' },
          { text: 'C语言入门', link: '/BasicKnowledge/item2' },
          { text: 'C语言0000', link: '/BasicKnowledge/item3' },
          { text: 'C语言0001', link: '/BasicKnowledge/item4' },
          { text: 'C语言0010', link: '/BasicKnowledge/item5' },
        ]
      },
      {
        text: '前端🫧',
        items: [
          { text: '前端学习指南', link: '/markdown-frontEnd/item1' },
          { text: '前端-0001', link: '/markdown-frontEnd/item2' },
          { text: '前端-0010', link: '/markdown-frontEnd/item3' },
          { text: '前端-0011', link: '/markdown-frontEnd/item4' },
          { text: '前端-0100', link: '/markdown-frontEnd/item5' },
          { text: '前端-0101', link: '/markdown-frontEnd/item6' },
          { text: '前端-0110', link: '/markdown-frontEnd/item7' },
        ]
      },
      {
        text: '后端✨',
        items: [
          { text: '后端学习指南', link: '/markdown-backEnd/item1' },
          { text: '后端-0001（语言基础）', link: '/markdown-backEnd/item2' },
          { text: '后端-0010（语言基础）', link: '/markdown-backEnd/item3' },
          { text: '后端-0011（语言基础）', link: '/markdown-backEnd/item4' },
          { text: '后端-0100（语言基础）', link: '/markdown-backEnd/item5' },
          { text: '后端-0101（Web基础）', link: '/markdown-backEnd/item6' },
          { text: '后端-0110（Web基础选做）', link: '/markdown-backEnd/item7' },
          { text: '后端-0111（Web进阶）', link: '/markdown-backEnd/item8' },
          { text: '后端-1000（附加题）', link: '/markdown-backEnd/item9' },
        ]
      },
      {
        text: '机器学习🤖',
        items: [
          { text: '初入机器学习🏅', link: '/markdown-MachineLearning/item1' },
          { text: '小试牛刀🎈', link: '/markdown-MachineLearning/item2' },
          { text: '论文阅读🙌', link: '/markdown-MachineLearning/item3' },
          { text: '(进阶题）怎么让机器分析词语的情感？🍭', link: '/markdown-MachineLearning/item4' },
          { text: '提交方式', link: '/markdown-MachineLearning/item5' },
        ]
      },
      {
        text: '工作室资料',
        items: [
          { text: '博客友链🔗', link: '/StudioInfo/FriendLink' },
         
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Yilu All rights reserved.'
    },
    // github图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 显示最近更新
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
