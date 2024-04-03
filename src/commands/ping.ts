import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import CommandType from './CommandType'

const ping: CommandType = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Pong!'),

  execute: async (interaction: CommandInteraction) => {
    interaction.reply(`Pong! ${interaction.user.username}`)
  },
}

export default ping
