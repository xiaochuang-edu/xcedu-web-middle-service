const siteDao = require('./dao')

exports.findSiteByName = siteName => {
  return siteDao.queryByName(siteName)
}

exports.findSiteById = siteId => {
  return siteDao.queryById(siteId)
}
