import { Client, Events } from 'discord.js'
import { isCommandKey } from '../libs'
import commands from '../commands'

const interaction = (client: Client<boolean>) => {
  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return

    const commandName = interaction.commandName
    if (!isCommandKey(commandName)) return

    commands[commandName].execute(interaction)
  })
}

export default interaction
