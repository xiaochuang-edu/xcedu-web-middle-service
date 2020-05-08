exports.generateUserLevelKey = (siteName, userName, action) => {
  return [siteName, userName, action].join(':')
}

exports.generateSiteLevelKey = (siteName, action) => {
  return [siteName, action].join(':')
}
