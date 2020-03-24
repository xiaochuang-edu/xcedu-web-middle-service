const Sequelize = require('sequelize')
const {
  database,
  username,
  password,
  host,
  port
} = require('./config/db.json')

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'mysql'
})

module.exports = sequelize
