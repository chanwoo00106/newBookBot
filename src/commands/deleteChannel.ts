import { SlashCommandBuilder, CommandInteraction } from 'discord.js'
import { deleteChannelService, isExistChannel } from '../service'

export default {
  data: new SlashCommandBuilder()
    .setName('delete-channel')
    .setDescription('신간 도서 알림 채널 취소'),

  execute: async (interaction: CommandInteraction) => {
    try {
      const { channel } = interaction
      if (!channel) return interaction.reply('채널 취소를 할 수 없습니다')

      if (!(await isExistChannel(channel.id)))
        return interaction.reply('등록된 채널이 아닙니다')

      await deleteChannelService(channel.id)
      return interaction.reply('채널 삭제에 성공했습니다')
    } catch (e) {
      return interaction.reply('채널 삭제에 실패했습니다')
    }
  },
}
