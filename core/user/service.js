const userDao = require('./dao')
const sequelize = require('sequelize')
const md5 = require('../../utils/md5')

const { createToken } = require('../../utils/token')

exports.login = async (username, password) => {
  const user = await userDao.queryByName(username)
  if (user && user.password === md5(password)) {
    return createToken({ userId: user.id, username: user.username, role: user.role })
  }
  return null
}

exports.changePwd = async (id, { oldPass, newPass }) => {
  const transaction = sequelize.transaction()
  try {
    const user = userDao.queryById(id, { transaction })
    if (user.password === md5(oldPass)) {
      userDao.update(id, { password: newPass }, { transaction })
      transaction.commit()
    } else {
      transaction.rollback()
      throw new Error('password is not correct')
    }
  } catch (e) {
    transaction.rollback()
  }
}

exports.profile = async (userId) => {
  return userDao.queryById(userId)
}
