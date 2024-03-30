import { SlashCommandBuilder, CommandInteraction } from 'discord.js'

export default {
  data: new SlashCommandBuilder().setName('ping').setDescription('Pong!'),

  execute: async (interaction: CommandInteraction) => {
    interaction.reply(`Pong! ${interaction.user.username}`)
  },
}
