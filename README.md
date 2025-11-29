# Xyai 文档结构说明

  ## 1. 项目概览
  - **框架**：整站基于 VitePress，所有命令在 `package.json` 中，常用脚本为 `npm run docs:dev`（本地预览）
  - **依赖**：仅 `vitepress`（开发依赖）与 `marked`（将首页弹窗 Markdown 转为 HTML）。
  - **自动部署**：`.github/workflows/deploy.yml` 监听 `main` 分支，依次执行 `npm ci` → `npm run docs:build` → 上传
    `docs/.vitepress/dist`，最后用 `actions/deploy-pages@v4` 发布到 GitHub Pages。

  ## 2. 目录速览
| 目录/文件                                                    | 作用                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `docs/`                                                      | 站点所有 Markdown、图片与静态资源                            |
| `docs/.vitepress/config.mts`                                 | 导航、侧边栏、搜索、页脚、社交链接等配置                     |
| `docs/.vitepress/theme/`                                     | 自定义布局与样式：`Layout.vue`、`index.ts`、`style.css`、`custom.css` |
| `docs/index.md`                                              | 首页内容（Hero、按钮、Feature、活动弹窗文案）                |
| `docs/activity/`                                             | 专题或活动落地页示例（如 `spring-2025.md`）                  |
| `docs/guide/`                                                | 不同产品/功能的使用指南；配图放在 `docs/guide/assets/`       |
| `docs/question/`                                             | 深度常见问题（Codex/Claude/Mirror），含独立 `assets/`        |
| `docs/assets/`/`docs/public/`                                | 公共插图与对外可访问资源（`public` 自动映射为根路径）        |
| `CLAUDE.md`                                                  | 协作约定，可选参考                                           |
| `node_modules/`、`docs/.vitepress/cache/`、`docs/.vitepress/dist/` | 依赖与构建产物，可忽略或清理                                 |

  ## 3. 内容分区指南
  - **站点介绍类**
    - `docs/about-site.md`：站点定位
    - `docs/combo.md`：套餐表格 + QA
    - `docs/update.md`：公告/变更日志
    - 若需首页显示，记得在 `config.mts.sidebar` 的 “站点介绍” 分组中维护链接。

  - **使用指南 (`docs/guide/`)**
    - `codexstart.md`：购买与脚本流程
    - `team.md`：自助邀请流程
    - `mirror.md`：Claude 镜像限速策略
    - `ccstart.md`：Claude Code 说明（可补充）
    - `index.md`：指南入口页；配图放 `docs/guide/assets/`。

  - **常见问题 (`docs/faq.md` & `docs/question/`)**
    - `docs/faq.md`：面向所有用户的简明 QA。
    - `docs/question/codexq.md`：Codex 详细排障。
    - `docs/question/claudecodeq.md`、`docs/question/mirror.md`：占位，未来扩写。
    - 需要在侧边栏显示时，解除 `config.mts` 中注释的条目或新增链接。

  - **活动/专题 (`docs/activity/`)**
    - `spring-2025.md` 展示 `<script setup>` + 弹窗交互，可复制改名创建其他活动页。
    - 相关按钮/弹窗样式定义在 `docs/.vitepress/theme/custom.css` 的 `.campaign-*` 段落。

  ## 4. 首页与主题说明
  - **首页内容**：`docs/index.md`
    - `hero` 块控制标题、副标题、按钮、右侧图片（`/hero-ai.png` 来自 `docs/public/`）。
    - `popup` 字段为活动弹窗 Markdown；若为空则不展示。
    - `features` 列出底部三张卡片。
  - **弹窗逻辑**：`docs/.vitepress/theme/Layout.vue`
    - 判断 `layout === 'home'` 时启用弹窗，并使用 `localStorage('vp-event-popup-closed-v1')` 记录关闭状态。
    - 弹窗样式在 `docs/.vitepress/theme/style.css`，按钮、Hero、Feature 等通用样式在 `custom.css`。
  - **导航/侧边栏**：`config.mts`
    - `nav` 控制顶部菜单，`sidebar` 为左侧分组。添加新页面后别忘同步这里。

  ## 5. 修改与扩展建议
  1. **新增页面**：在对应目录创建 `.md`，若需在菜单出现，更新 `config.mts` 中的 `nav` 或 `sidebar`。
  2. **更新首页活动**：修改 `docs/index.md` 的 `popup` 内容或按钮；CSS 复用现有样式即可。
  3. **补全 FAQ/指南**：在 `docs/question/`/`docs/guide/` 中填充内容和插图，然后更新侧边栏。
  4. **替换图片**：首页图放 `docs/public/`（引用路径 `/xxx.png`），其他页面的图片放各自目录的 `assets/`。
  5. **本地验证**：第一次运行 `npm install`，日常使用 `npm run docs:dev` 预览；发布前跑 `npm run docs:build` 检查。推送

    `main` 后 GitHub Actions 会自动部署。