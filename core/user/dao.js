const { Op } = require('sequelize')
const model = require('./model')

exports.queryById = (id, option = {}) => {
  const options = {
    attributes: ['id', 'userName', 'role']
  }
  if (option.transaction) {
    options.transaction = option.transaction
  }

  return model.findByPk(id, options)
}

exports.queryByName = (userName, option = {}) => {
  const options = {
    attributes: ['id', 'userName', 'password', 'role'],
    where: { userName }
  }
  if (option.transaction) {
    options.transaction = option.transaction
  }
  return model.findOne(options)
}

exports.queryAll = ({ limit = 10, offset = 0, userName = '' }) => {
  const where = {}

  if (userName) {
    where.userName = {
      [Op.like]: `%${userName}%`
    }
  }

  return model.findAndCountAll({
    where,
    offset: 10,
    limit: 2
  })
}

exports.create = (user, params = {}) => {
  const options = {}
  if (params.transaction) {
    options.transaction = params.transaction
  }
  return model.save(user, options)
}

exports.update = (user, params = {}) => {
  const { id, password, role } = user

  const update = {}
  if (password) {
    update.password = password
  }
  if (role) {
    update.role = role
  }

  const options = {
    where: { id }
  }
  if (params.transaction) {
    options.transaction = params.transaction
  }

  return model.update(update, options)
}
