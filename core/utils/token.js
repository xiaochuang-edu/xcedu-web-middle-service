const { readFileSync } = require('fs')
const { resolve } = require('path')
const jwtToken = require('jsonwebtoken')

const TOKEN_EXPORED_DURATION = '2h'
const algorithm = 'RS256'

const secret = readFileSync(resolve(__dirname, '../ssl/server.key'), 'utf8')

const createToken = payload => {
  return jwtToken.sign(payload, secret, { algorithm, expiresIn: TOKEN_EXPORED_DURATION })
}
const verifyToken = token => {
  try {
    return jwtToken.verify(token, secret, { algorithms: [algorithm], maxAge: TOKEN_EXPORED_DURATION })
  } catch (e) {
    return null
  }
}

module.exports = { createToken, verifyToken }
