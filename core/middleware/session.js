const session = require('koa-session')

const config = {
  key: 'koa:sess',
  maxAge: 7200000,
  signed: false
}

module.exports = app => {
  return session(config, app)
}
