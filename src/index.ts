import './env'
import './libs/dayjsSetup'
import { Client, Events, GatewayIntentBits } from 'discord.js'
import commands from './commands'
import { isCommandKey } from './libs'
import setupCommands from './setupCommands'
import batchs from './batchs'
import { addGuild } from './service'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (client) => {
  console.log(`${client.user.username} ready`)
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const commandName = interaction.commandName
  if (!isCommandKey(commandName)) return

  commands[commandName].execute(interaction)
})

client.on(Events.GuildCreate, (guild) => {
  addGuild(guild)
})

batchs.forEach((batch) => {
  setInterval(async () => {
    const promises = await batch.execute(client)
    if (!promises) return

    Promise.all(promises)
  }, batch.millisecond)
})

setupCommands()

client.login(process.env.BOT_TOKEN)
