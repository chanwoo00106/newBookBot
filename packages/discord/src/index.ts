import './env'
import { Client, GatewayIntentBits } from 'discord.js'
import setupCommands from './setupCommands'
import batchs from './batchs'
import events from './events'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

events(client)

batchs.forEach((batch) => {
  setInterval(async () => {
    const promises = await batch.execute(client)
    if (!promises) return

    Promise.all(promises)
  }, batch.millisecond)
})

setupCommands()

client.login(process.env.BOT_TOKEN)
