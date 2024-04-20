import {
  SlashCommandBuilder,
  CommandInteraction,
  EmbedBuilder,
} from 'discord.js'
import CommandType from './CommandType'
import dayjs from 'dayjs'

const ping: CommandType = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Pong!'),

  execute: async (interaction: CommandInteraction) => {
    const embed = new EmbedBuilder()
      .setTitle(`Pong! ${interaction.user.displayName}`)
      .setDescription('Ping Pong test!')
      .setColor('#3498DB')
      .setTimestamp(dayjs().toDate())

    interaction.reply({ embeds: [embed] })
  },
}

export default ping
