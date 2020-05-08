const userDao = require('./dao')
const sequelize = require('sequelize')
const md5 = require('../utils/md5')

exports.login = async (account, siteName, password) => {
  const user = await userDao.queryByName(account, siteName)
  if (user.password === md5(password)) {
    return { id: user.id, account: user.account, userName: user.userName, role: user.role }
  }
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
