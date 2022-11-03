# Personal Website

> 个人网站的首页渲染及链接配置。

Welcome to my [personal website](https://zhangling.site). Read more about me:

[`文章`](https://yuque.com/zeroll)
[`代码`](https://github.com/lingxyz)
[`Email`](mailto:zhangling.me@foxmail.com)

## Usage

- 项目配置抽离在 `database` 目录中。若更改页面配置，正常情况下无需修改代码。
- 提交代码自动触发 `Github Actions` 构建。也可在项目根目录下执行 `./deploy.sh` 立即发布。
- 项目使用 `nuxt` 构建，执行 `npm run build` 后按路由生成静态页面。
- 静态页面托管在 `github pages`。
