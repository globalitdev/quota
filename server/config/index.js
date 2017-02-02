import crypto from 'crypto'
import config from 'config-node'
import dotenv from 'dotenv'

dotenv.config()

config({ env: 'default', dir: __dirname })

export default config({
  env: process.env.NODE_ENV || 'development',
  dir: __dirname
})
