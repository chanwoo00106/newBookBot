import { SlashCommandBuilder } from 'discord.js'
import CommandType from './CommandType'

const search: CommandType = {
  data: () => {
    const command = new SlashCommandBuilder()
    command
      .setName('search')
      .setDescription('책 검색')
      .addStringOption((option) =>
        option
          .setName('querytype')
          .setDescription('검색 옵션')
          .addChoices({ name: '제목+저자', value: 'keyword' })
          .addChoices({ name: '제목 검색', value: 'title' })
          .addChoices({ name: '저자 검색', value: 'author' })
          .addChoices({ name: '출판사 검색', value: 'publisher' }),
      )
      .addStringOption((option) =>
        option
          .setName('searchtarget')
          .setDescription('검색 타겟')
          .addChoices({ name: '도서', value: 'book' }),
      )

    return command
  },
  execute: async (interaction) => {
    console.log(interaction.options.data)

    interaction.reply('test')
  },
}

export default search
