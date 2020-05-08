module.exports = async (ctx, next) => {
  const url = ctx.hostname
  ctx.siteName = url.substr(0, url.indexOf('.'))
  await next()
}
