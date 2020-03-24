const crypto = require('crypto')

function encrypt (planText) {
  const md5 = crypto.createHash('md5')
  md5.update(planText, 'utf8')
  return md5.digest('hex').toLowerCase().replace(/-/g, '')
}

module.exports = encrypt
