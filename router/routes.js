const fs = require('fs')
const path = require('path')
const Router = require('@koa/router')
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync(path.resolve(__dirname, '../views/ssr-template.htm'), 'utf-8')

module.exports = function ({ location, paths, title }) {
  const router = new Router()

  paths.forEach(item => {
    const clientManifest = require(`${location}/vue-ssr-client-manifest.json`)

    const renderer = createBundleRenderer(`${location}/vue-ssr-server-bundle.json`, {
      runInNewContext: false, // 推荐
      template, // （可选）页面模板
      clientManifest// （可选）客户端构建 manifest
    })

    router.get(item, async ctx => {
      const context = { url: ctx.url, title }
      const html = await renderer.renderToString(context)
      ctx.body = html
    })
  })
  return router
}
