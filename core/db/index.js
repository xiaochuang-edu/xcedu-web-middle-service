const Sequelize = require('sequelize')
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER_NAME,
  MYSQL_USER_PASSWORD
} = require('../utils/env')

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER_NAME, MYSQL_USER_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  logging: false
})

module.exports = sequelize
