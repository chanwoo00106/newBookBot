import { config } from 'dotenv'
import { resolve } from 'path'

const environment = process.env.NODE_ENV
const path =
  environment === 'production'
    ? resolve(__dirname, '../.env.production')
    : resolve(__dirname, '../.env.development')

config({ path })
