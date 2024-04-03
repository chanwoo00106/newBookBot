declare namespace NodeJS {
  interface ProcessEnv {
    TTB_KEY: string

    BOT_TOKEN: string
    NODE_ENV: 'development' | 'production'
    CLIENT_ID: string

    DATABASE_URL: string
    DIRECT_URL: string
  }
}
