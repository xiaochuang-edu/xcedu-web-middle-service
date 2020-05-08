const { readFileSync, existsSync } = require('fs')
const { parse } = require('dotenv')
const path = require('path')

const resolve = filename => path.resolve(__dirname, '../../', filename)

function load (filename) {
  const envPath = resolve(filename)
  if (existsSync(envPath)) {
    return parse(readFileSync(envPath))
  }
  return {}
}

const env = process.env.NODE_ENV

module.exports = Object.assign(load('.env'), load('.env.local'), load(`.env.${env}`), load(`.env.${env}.local`))
