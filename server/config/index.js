import crypto from 'crypto'
import config from 'config-node'

config({ env: 'default', dir: __dirname })

export default config({
  env: process.env.NODE_ENV || 'development',
  dir: __dirname
})
