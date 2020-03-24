const { STRING, Model } = require('sequelize')
const sequelize = require('../sequelize')

class Site extends Model {}
Site.init({
  id: {
    type: STRING(40),
    field: 'ID',
    primaryKey: true,
    comment: '站点唯一标志ID'
  },

  siteName: {
    type: STRING(40),
    field: 'SITE_NAME',
    allowNull: false,
    unique: true,
    comment: '站点的名称'
  },

  fullName: {
    type: STRING(100),
    field: 'FULL_NAME',
    unique: true,
    allowNull: false,
    comment: '站点的名称'
  },

  address: {
    type: STRING(100),
    field: 'ADDRESS',
    defaultValue: '',
    comment: '公司所在地址'
  }
}, {
  sequelize,
  modelName: 'Sites',
  tableName: 'EDU_SITES',
  createdAt: 'CREATE_TIME',
  updatedAt: 'UPDATE_TIME'
})

module.exports = Site
