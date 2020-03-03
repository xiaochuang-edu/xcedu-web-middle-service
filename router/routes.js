const fs = require('fs')
const { resolve } = require('path')
const Router = require('@koa/router')
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync(resolve(__dirname, '../views/ssr-template.htm'), 'utf-8')

module.exports = function ({ mountpoint, paths, title }) {
  const router = new Router()

  paths.forEach(item => {
    const clientManifest = require(`../mount/${mountpoint}/vue-ssr-client-manifest.json`)

    const renderer = createBundleRenderer(resolve(__dirname, '../mount', mountpoint, 'vue-ssr-server-bundle.json'), {
      runInNewContext: false, // 推荐
      template, // （可选）页面模板
      clientManifest, // （可选）客户端构建 manifest,
      inject: false
    })

    router.get(item, async ctx => {
      const context = { context: ctx.origin, title }
      const html = await renderer.renderToString(context)
      ctx.body = html
    })
  })
  return router
}
