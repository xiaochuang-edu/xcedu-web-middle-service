const fs = require('fs')
const Router = require('@koa/router')

const config = require('../utils/env')

const router = new Router()

const fetchFilename = root => {
  const result = { style: 'index.css', script: 'main.js' }
  if (process.env.NODE_ENV === 'production' && fs.existsSync(root)) {
    fs.readdirSync(root).forEach(filename => {
      if (filename.startsWith('index.') && filename.endsWith('.css')) {
        result.style = filename
      } else if (filename.startsWith('main.') && filename.endsWith('.js')) {
        result.script = filename
      }
    })
  }
  return result
}

const getAssetRootPath = name => {
  return Object.getOwnPropertyDescriptor(config, `MODULE_${name.toUpperCase()}_ASSERT_ROOT`).value
}

const getModuleBaseUrl = name => {
  return Object.getOwnPropertyDescriptor(config, `MODULE_${name.toUpperCase()}_BASE_URL`).value
}

const loadModule = name => {
  const { style, script } = fetchFilename(getAssetRootPath(name))
  const baseUrl = getModuleBaseUrl(name)

  return { moduleName: name, baseUrl, script, style }
}

const properties = ['navbar', 'portal', 'user', 'space', 'education', 'email', 'ecard'].map(name => loadModule(name))

const importmaps = properties.reduce((maps, item) => {
  Object.defineProperty(maps, `@xcedu/${item.moduleName}`, {
    enumerable: true,
    configurable: false,
    writable: false,
    value: `${item.baseUrl}/${item.script}`
  })
  return maps
}, {})

router.get('/importmaps', async ctx => {
  ctx.body = {
    imports: importmaps
  }
})

module.exports = router
