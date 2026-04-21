import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "家装百科",
  description: "装修避坑指南与全流程百科",
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "装修流程", link: "/guide/prep" },
      { text: "材料库", link: "/materials/" },
      { text: "避坑指南", link: "/pitfalls/quote" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "装修全流程",
          items: [
            { text: "第一阶段：前期准备", link: "/guide/prep" },
            { text: "第二阶段：硬装施工", link: "/guide/hard-decoration" },
            { text: "第三阶段：主材安装", link: "/guide/installation" },
            { text: "第四阶段：软装与收尾", link: "/guide/finishing" },
            { text: "第五阶段：通风与入住", link: "/guide/move-in" }
          ]
        }
      ],
      "/materials/": [
        {
          text: "材料库总览",
          items: [
            { text: "材料分类指南", link: "/materials/" }
          ]
        },
        {
          text: "地面材料",
          items: [
            { text: "瓷砖选购", link: "/materials/floor/tile" }
          ]
        },
        {
          text: "墙面材料",
          items: [
            { text: "乳胶漆选购", link: "/materials/wall/paint" }
          ]
        }
      ],
      "/pitfalls/": [
        {
          text: "避坑指南",
          items: [
            { text: "报价单猫腻", link: "/pitfalls/quote" },
            { text: "合同审查清单", link: "/pitfalls/contract" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-repo" }
    ],
    footer: {
      message: '用心打造装修知识库',
      copyright: 'Copyright © 2026 家装百科'
    },
    search: {
      provider: 'local'
    }
  }
})
