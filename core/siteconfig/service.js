const dao = require('./dao')

exports.loadSiteConfig = siteId => {
  return dao.findBySiteId(siteId)
}

exports.loadSiteConfigbyName = siteName => {
  return dao.findBySiteName(siteName)
}
