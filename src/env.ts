import { config } from 'dotenv'

const isProd = process.env.NODE_ENV === 'production'
const path = isProd ? '.env.production' : '.env.development'

config({ path })
