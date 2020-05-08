const Router = require('@koa/router')

// const service = require('./service')

const router = new Router()

// router.get('/sites/current/config', async ctx => {
//   ctx.body = await service.loadSiteConfigbyName(ctx.siteName)
// })

router.get('/sites/current/config', async ctx => {
  ctx.body = {
    code: 0,
    siteConfig: {
      logo: 'http://gtyz.xiaochuang.com:8499/45f3cad57266437e9dd0344ab3c21a46/logo/5133df56aaed4e59986c03cab15e6316.png',
      copyright: '沐坤集团©2019 All Rights Reserved.',
      company: '广州市铁一中学'
    }
  }
  // ctx.body = await service.loadSiteConfigbyName(ctx.siteName)
})

// router.get('/sites/:siteId/config', async ctx => {
//   ctx.body = await service.loadSiteConfig(ctx.params.siteId)
// })

router.get('/sites/:siteId/config', async ctx => {
  ctx.body = {
    code: 0,
    siteConfig: {
      logo: 'http://gtyz.xiaochuang.com:8499/45f3cad57266437e9dd0344ab3c21a46/logo/5133df56aaed4e59986c03cab15e6316.png',
      copyright: '沐坤集团©2019 All Rights Reserved.',
      company: '广州市铁一中学'
    }
  }
})

module.exports = router
