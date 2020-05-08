const { col } = require('sequelize')
const model = require('./model')
const SiteModel = require('../sites/model')
const SiteConfig = require('./SiteConfig')

exports.findBySiteId = async (siteId, option = {}) => {
  const options = {
    attributes: ['itemName', 'itemValue'],
    where: {
      siteId
    }
  }
  if (option.transaction) {
    options.transaction = option.transaction
  }
  const list = await model.findAll(options)
  const config = new SiteConfig(list)
  return config
}

exports.findBySiteName = async (siteName, option) => {
  const options = {
    attributes: ['itemName', 'itemValue'],
    include: [{
      model: SiteModel,
      as: 'Site',
      where: {
        siteName
      }
    }]
  }
  const list = await model.findAll(options)
  return new SiteConfig(list)
}
