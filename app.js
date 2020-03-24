const path = require('path')
const http = require('http')

const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const errorHanler = require('koa-json-error')
// const session = require('koa-generic-session')
// const redis = require('koa-redis')

// const redisConfig = require('./config/redis.json')
const router = require('./core')

const app = new Koa()

app.use(bodyparser())

app.use(errorHanler(err => {
  return {
    errCode: err.errCode || 500,
    message: err.message || 'Internal Server Error',
    data: err.data || {}
  }
}))
// static some file
app.use(serve(path.resolve(__dirname, 'public')))

// mapping render extesion and template
app.use(views(path.resolve(__dirname, 'views'), {
  extension: 'htm',
  map: { htm: 'handlebars' }
}))

// // redis middleware
// app.use(session({
//   prefix: 'edu:sess',
//   store: redis(redisConfig)
// }))

app.use(router.routes()).use(router.allowedMethods())

http.createServer(app.callback()).listen(8080)
