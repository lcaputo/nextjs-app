import { config } from 'dotenv'

function resolvedbhost () {
  const systemuser = require('os').userInfo().username.trim()
  console.log('system user:', systemuser)
  if (systemuser === 'docker' || systemuser === 'node') {
    return process.env.DB_HOST
  } else { return 'localhost' }
}

config()

export default {
  mongodbURL: `mongodb://${resolvedbhost()}:${process.env.DB_PORT}/${process.env.DB_NAME}`
}
