const redis = require('redis')

const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_STORE_PREFIX,
  REDIS_PASSWORD
} = require('../utils/env')

const client = redis.createClient({
  host: REDIS_HOST,
  prot: REDIS_PORT,
  prefix: REDIS_STORE_PREFIX,
  password: REDIS_PASSWORD
})

module.exports = client
