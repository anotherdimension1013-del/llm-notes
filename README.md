# LLM 推理学习笔记

跟着 [zero-to-sglang](https://github.com/datawhalechina/zero-to-sglang) 学习大模型推理的笔记与讨论记录。

在线阅读：https://anotherdimension1013-del.github.io/llm-notes/

## 本地运行

```bash
npm install
npm run dev
```

## 添加新笔记

1. 在 `docs/` 下新建 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 里加一行链接
3. 推送到 `main` 分支，GitHub Actions 会自动构建并发布
