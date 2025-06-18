# 谷苏良匠

谷苏良匠是一个基于 UniApp 的项目，旨在提供跨平台的无缝用户体验，包括移动应用、网页和小程序。项目使用 UniCloud 提供后端服务，并包含配置管理和基于令牌的身份验证模块。

## 功能特点
- 支持跨平台（App、Web、小程序）
- 使用 `uni-id-common` 实现令牌生成、校验和刷新
- 使用 `uni-config-center` 实现集中式配置管理
- 可通过 SCSS 变量自定义样式
- 轻松集成 UniCloud 数据库和云函数

## 安装步骤
1. 克隆项目代码。
2. 在 HBuilderX 中打开项目。
3. 在安装依赖前，请确保 `package.json` 中的 `@dcloudio/vite-plugin-uni` 插件版本为 NPM 上实际存在的可用版本。
4. 使用 `npm install` 安装依赖。

## 使用方法
- 在 HBuilderX 中本地运行项目。
- 将云函数部署到 UniCloud 提供后端服务。

## 许可证
本项目使用 Apache-2.0 许可证。