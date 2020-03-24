const fs = require('fs')
const { resolve } = require('path')
const Router = require('@koa/router')
const { createBundleRenderer } = require('vue-server-renderer')
const config = require('./render.json')

const router = new Router()
const template = fs.readFileSync(resolve(__dirname, './template.htm'), 'utf-8')

function createModuleRouter (router, { title, urls, mountpoint }) {
  const clientManifest = require(`../../mount/${mountpoint}/vue-ssr-client-manifest.json`)

  const renderer = createBundleRenderer(resolve(__dirname, '../../mount', mountpoint, 'vue-ssr-server-bundle.json'), {
    runInNewContext: false, // 推荐
    template, // （可选）页面模板
    clientManifest, // （可选）客户端构建 manifest,
    inject: false
  })

  return urls.forEach(url => {
    router.get(url, async ctx => {
      const context = { context: ctx.origin, url: ctx.url, title, theme: 'blue' }
      const html = await renderer.renderToString(context)
      ctx.body = html
    })
  })
}

config.forEach(item => {
  createModuleRouter(router, item)
})

module.exports = router
