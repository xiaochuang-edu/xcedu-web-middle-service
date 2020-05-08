const Router = require('@koa/router')
// const service = require('./service')
// const { ACCESS_DENINED } = require('../constants/ERROR_CODE')
const router = new Router()

// const { createToken } = require('../utils/token')

// router.post('/user/login', async ctx => {
//   const { account, password } = ctx.request.body

//   const user = await service.login(account, ctx.siteName, password)
//   if (user) {
//     const authToken = createToken({
//       userId: user.id,
//       siteId: ctx.siteName
//     })
//     ctx.cookies.set('token', authToken)
//     ctx.session.userId = user.id
//     ctx.body = {
//       code: 0,
//       user: {
//         id: user.id,
//         account: user.account,
//         username: user.userName,
//         role: user.role
//       },
//       token: authToken
//     }
//   } else {
//     ctx.throw(401, 'username or password not correct!', { errCode: ACCESS_DENINED })
//   }
// })

router.post('/user/login', async ctx => {
  ctx.body = {
    code: 0,
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZDNhNzBlOTI4NDE0YTM5OTA5NmViZjEwYjQ1YTE1ZCIsInNpdGVJZCI6Im11a3VuIiwiaWF0IjoxNTg2MDk2ODU4LCJleHAiOjE1ODYxMDQwNTh9.371ROUp8sa21fEJD3PJ27pg7RU_TBd0myZmzihjlyOhS9IGbnFBf5o74maVAiU37DZXgicewmYb4biHmi15-WL0E3jfztjooJKmVSAIgD-1u7_Ncnc7ExMM6M7WNp067_6TKSKNynw9vetrNmU_Xe8JXLWFHlNgZGKy4597hU9IFniJoG8fvFhWK55jo24ZbF-qtwPrcoWxueEYePJWGEBSst4hT2dDKOcfrvpuu-Sw4isWQBeOqisvK2rQJFYK0DooPm5LT3U5tUzCKiHojO_E2OsLViKJ7y_tF1U4meBfX_E1YQ7dW2TOxxxDUR4Bm6PCCfckxmXxVthNHiZ5qyQ',
    user: {
      id: 'dd3a70e928414a399096ebf10b45a15d',
      account: 'chejian2',
      username: '江成',
      role: 'ADMIN'
    },
    profile: {
      layout: 'standalone',
      theme: 'orange'
    }
  }
})

router.post('/user/logout', async ctx => {
  ctx.status = 204
})

module.exports = router
