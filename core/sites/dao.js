const model = require('./model')

exports.queryById = siteId => {
  return model.findByPk(siteId, {
    attributes: ['id', 'siteName', 'fullName', 'address']
  })
}

exports.queryByName = siteName => {
  return model.findOne({
    attributes: ['id', 'siteName', 'fullName', 'address'],
    where: { siteName }
  })
}
