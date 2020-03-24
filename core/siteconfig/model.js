
const { STRING, Model } = require('sequelize')
const sequelize = require('../sequelize')
const Site = require('../sites/model')

class SiteConfig extends Model {}

SiteConfig.init({
  id: {
    type: STRING(40),
    field: 'ID',
    primaryKey: true,
    comment: '站点唯一标志ID'
  },

  siteId: {
    type: STRING(40),
    field: 'SITE_ID',
    allowNull: false,
    comment: '该配置项所属的站点的id'
  },

  itemName: {
    type: STRING(40),
    field: 'ITEM_NAME',
    allowNull: false,
    comment: '站点配置项的名称'
  },

  itemValue: {
    type: STRING(255),
    field: 'ITEM_VALUE',
    comment: '站点配置项的值'
  }

}, {
  sequelize,
  modelName: 'SiteConfig',
  tableName: 'EDU_SITE_CONFIG',
  createdAt: 'CREATE_TIME',
  updatedAt: 'UPDATE_TIME'
})

SiteConfig.belongsTo(Site, {
  foreignKey: 'SITE_ID'
})

module.exports = SiteConfig
