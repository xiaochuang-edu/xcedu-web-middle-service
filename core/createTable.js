const User = require('./user/model')
const Site = require('./sites/model')
const SiteConfig = require('./siteconfig/model')

User.sync()

Site.sync().then(() => {
  SiteConfig.sync()
})
