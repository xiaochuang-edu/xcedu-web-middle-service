const map = Symbol('valueMap')

class ItemNameValue {
  constructor (value) {
    this[map] = new Map()
    if (Array.isArray(value)) {
      value.forEach(item => {
        this[map].set(item.itemName, item.itemValue)
      })
    } else if (typeof value === 'object') {
      Object.keys(value).forEach(key => {
        const desc = Object.getOwnPropertyDescriptor(this, key)
        const hasSetter = desc && typeof desc.set === 'function'
        if (hasSetter) {
          desc.set.call(this, value[key])
        }
      })
    }
  }

  toJSON () {
    const json = {}

    const proto = Object.getPrototypeOf(this)
    Object.getOwnPropertyNames(proto).reduce((json, key) => {
      const desc = Object.getOwnPropertyDescriptor(proto, key)
      const hasGetter = desc && typeof desc.get === 'function'
      if (hasGetter) {
        json[key] = desc.get.call(this)
      }
      return json
    }, json)

    return Object.assign(json, this)
  }
}

ItemNameValue.map = map

module.exports = ItemNameValue
