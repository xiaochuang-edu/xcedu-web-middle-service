const path = require('path')
const http = require('http')

const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const errorHanler = require('koa-json-error')

const session = require('./core/middleware/session')
const atthenticate = require('./core/middleware/authenticate')

const router = require('./core')

const { KOA_PORT } = require('./core/utils/env')

const app = new Koa()
// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  await next()
  ctx.set('Access-Control-Allow-Origin', '*')
})

app.use(bodyparser())

app.use(errorHanler(err => {
  return {
    errCode: err.errCode || 500,
    message: err.message || 'Internal Server Error',
    data: err.data || {}
  }
}))

app.use(session(app))
// static some file
app.use(serve(path.resolve(__dirname, 'public')))

// mapping render extesion and template
app.use(views(path.resolve(__dirname, 'views'), {
  extension: 'htm',
  map: { htm: 'handlebars' }
}))
app.use(atthenticate)

app.use(router.routes()).use(router.allowedMethods())

http.createServer(app.callback()).listen(KOA_PORT)
