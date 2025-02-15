# 📡 VueDir

[English](./README.en.md) | 简体中文

VueDir 是一个轻量级的 Vue 3 指令集合，旨在提供一系列实用的自定义指令，帮助开发者更高效地构建 Vue 应用。

## ✨ 特性

- 🎯 **聚焦指令**: 提供 v-focus 指令，实现自动聚焦功能
- 🎨 **轻量级**: 按需引入，不会增加额外的包体积
- 🔧 **易于使用**: 简单的 API 设计，快速上手
- 📦 **TypeScript**: 使用 TypeScript 编写，提供完整的类型支持

## 📦 安装

使用 pnpm 安装（推荐）：

```bash
pnpm add @vuedir/core
```

## 🚀 使用

在你的 Vue 应用中注册 VueDir：

```ts
import { createApp } from "vue";
import VueDir from "@vuedir/core";

const app = createApp(App);
app.use(VueDir);
app.mount("#app");
```

## 📖 文档

访问我们的[官方文档](https://vuedir.codepaintstudio.com)获取更多信息。

## 🤝 贡献

我们欢迎任何形式的贡献！请查看我们的[贡献指南](./CONTRIBUTING.md)了解如何参与。

## 📄 开源协议

VueDir 是基于 MIT 协议的开源软件。查看 [MIT License](https://github.com/CodePaintStudio/vuedir/blob/main/LICENSE) 文件了解更多详情。
