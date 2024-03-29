import { Client } from 'discord.js'
import './env'

const client = new Client({
  intents: [],
})

client.login(process.env.BOT_TOKEN)
