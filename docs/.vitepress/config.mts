import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'LLM 推理学习笔记',
  description: '跟着 zero-to-sglang 从零学习大模型推理的笔记与讨论',
  base: '/llm-notes/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/part1/ch01-llm-intro' },
    ],
    sidebar: [
      {
        text: '第一部分：基础',
        items: [
          { text: '第 1 章 LLM 入门', link: '/part1/ch01-llm-intro' },
        ],
      },
    ],
    outline: { level: [2, 3], label: '本页目录' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anotherdimension1013-del/llm-notes' },
    ],
    search: { provider: 'local' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
  },
})
