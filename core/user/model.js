
const { STRING, ENUM, Model } = require('sequelize')
const sequelize = require('../sequelize')

class User extends Model {}
User.init({
  id: {
    type: STRING(40),
    field: 'ID',
    primaryKey: true,
    comment: '用户唯一标志ID'
  },

  userName: {
    type: STRING(40),
    field: 'USER_NAME',
    unique: true,
    allowNull: false,
    comment: '用户名，唯一， 不可以为空'
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
  updatedAt: 'UPDATE_TIME'
})

module.exports = User
