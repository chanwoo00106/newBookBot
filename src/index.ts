import './env'
import { Client, Events, GatewayIntentBits } from 'discord.js'
import commands from './commands'
import { isCommandKey } from './libs'
import setupCommands from './setupCommands'
import batchs from './batchs'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, (client) => {
  console.log(`${client.user.username} ready`)
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const commandName = interaction.commandName
  if (!isCommandKey(commandName)) return

  return commands[commandName].execute(interaction)
})

batchs.forEach((batch) => {
  setInterval(async () => {
    Promise.all(await batch.execute(client))
  }, batch.millisecond)
})

setupCommands()

client.login(process.env.BOT_TOKEN)
