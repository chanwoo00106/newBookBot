import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { addChannel, addGuild, isExistChannel } from '../service'
import isExistGuild from '../service/isExistGuild'

export default {
  data: new SlashCommandBuilder()
    .setName('register')
    .setDescription('신간 도서 알림 채널 등록'),

  execute: async (interaction: CommandInteraction) => {
    try {
      const { channel, guild } = interaction
      if (!guild || !channel)
        return interaction.reply('채널을 등록할 수 없습니다')

      if (!(await isExistGuild(guild.id))) addGuild(guild)

      if (await isExistChannel(channel.id)) {
        return interaction.reply('이미 등록된 채널입니다')
      }

      addChannel(guild.id, channel)

      return interaction.reply('채널 등록에 성공했습니다')
    } catch (e) {
      console.log(e)
      return interaction.reply('채널 등록에 실패했습니다')
    }
  },
}
