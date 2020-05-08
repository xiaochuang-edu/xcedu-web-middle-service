const ItemNameValue = require('../common/ItemNameValue')

const ICO_PATH = 'ICO_PATH'
const LOGO_PATH = 'LOGO_PATH'
const COPYRIGHT = 'COPYRIGHT'
const COMPANY_NAME = 'COMPANY_NAME'

const map = ItemNameValue.map

class SiteConfig extends ItemNameValue {
  get favicon () {
    return this[map].get(ICO_PATH)
  }

  set favicon (value = '') {
    this[map].set(ICO_PATH, value)
  }

  get logo () {
    return this[map].get(LOGO_PATH)
  }

  set logo (value = '') {
    this[map].set(LOGO_PATH, value)
  }

  get copyright () {
    return this[map].get(COPYRIGHT)
  }

  set copyright (value = '') {
    this[map].set(COPYRIGHT, value)
  }

  get company () {
    return this[map].get(COMPANY_NAME)
  }

  set company (value = '') {
    this[map].set(COMPANY_NAME, value)
  }
}

module.exports = SiteConfig
