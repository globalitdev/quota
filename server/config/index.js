import crypto from 'crypto'
import config from 'config-node'

config({ env: 'default' })

export default config({
  env: process.env.NODE_ENV || 'development'
})
