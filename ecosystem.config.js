module.exports = {
  apps: [{
    name: 'xcedu-server-development',
    script: 'app.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    }
  }, {
    name: 'xcedu-server-production',
    script: 'app.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
