
const { STRING, ENUM, Model } = require('sequelize')
const sequelize = require('../db')

const Site = require('../sites/model')

class User extends Model {}
User.init({
  id: {
    type: STRING(40),
    field: 'ID',
    primaryKey: true,
    comment: '用户唯一标志ID'
  },

  siteID: {
    type: STRING(40),
    field: 'SITE_ID',
    allowNull: false,
    comment: '该用户所属的Site'
  },

  account: {
    type: STRING(40),
    field: 'ACCOUNT',
    allowNull: false,
    comment: '用户账号，唯一， 不可以为空'
  },

  userName: {
    type: STRING(40),
    field: 'USER_NAME',
    allowNull: false,
    comment: '用户姓名'
  },

  password: {
    type: STRING(40),
    field: 'PASSWORD',
    allowNull: false,
    comment: '用户密码'
  },

  role: {
    type: ENUM('ADMIN', 'TEACHER', 'STUDENT'),
    field: 'USER_ROLE',
    allowNull: false,
    defaultValue: 'ADMIN'
  }

}, {
  sequelize,
  modelName: 'User',
  tableName: 'EDU_USERS',
  createdAt: 'CREATE_TIME',
  updatedAt: 'UPDATE_TIME',
  indexes: [{
    name: 'EDU_USER_INDEXES_SITE_ID_AND_ACCOUNT',
    unique: true,
    fields: ['SITE_ID', 'ACCOUNT']
  }]
})

User.belongsTo(Site, {
  foreignKey: 'SITE_ID'
})

module.exports = User
