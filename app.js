const path = require('path')
const http = require('http')
const fs = require('fs')

const Koa = require('koa')
const serve = require('koa-static')
const views = require('koa-views')
// const session = require('koa-generic-session')
// const redis = require('koa-redis')

// const redisConfig = require('./config/redis.json')
const router = require('./router')

const app = new Koa()

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
