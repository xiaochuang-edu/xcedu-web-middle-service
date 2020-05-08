const Router = require('@koa/router')

// const service = require('./service')

const router = new Router()

// router.get('/sites/current', async ctx => {
//   ctx.body = await service.findSiteByName(ctx.siteName)
// })

router.get('/sites/current', async ctx => {
  ctx.body = {
    code: 0,
    site: {
      id: '45f3cad57266437e9dd0344ab3c21a46',
      siteName: 'gtyz',
      fullName: '广州市铁一中学'
    }
  }
})

// router.get('/sites/:id', async ctx => {
//   ctx.body = await service.findSiteById(ctx.params.id)
// })

router.get('/sites/:id', async ctx => {
  ctx.body = {
    code: 0,
    site: {
      id: '45f3cad57266437e9dd0344ab3c21a46',
      siteName: 'gtyz',
      fullName: '广州市铁一中学'
    }
  }
})

module.exports = router
