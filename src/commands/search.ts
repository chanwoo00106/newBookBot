import { EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import CommandType from './CommandType'
import commandOptionToJson from '../libs/commandOptionToJson'
import { z } from 'zod'
import searchBook from '../service/searchBook'
import { createBookEmbed } from '../embeds'

const validation = z.object({
  query: z.string(),
  querytype: z.string().optional().default('keyword'),
  searchtarget: z.string().optional().default('book'),
  start: z.number().optional().default(1),
  maxresults: z.number().optional().default(1),
  sort: z.string().optional().default('accuracy'),
  cover: z.string().optional().default('none'),
})

const search: CommandType = {
  data: () => {
    const command = new SlashCommandBuilder()
    command
      .setName('search')
      .setDescription('책 검색')
      .addStringOption((option) =>
        option.setName('query').setDescription('검색어').setRequired(true),
      )
      .addStringOption((option) =>
        option
          .setName('query-type')
          .setDescription('검색 옵션')
          .addChoices({ name: '(기본값)제목+저자', value: 'keyword' })
          .addChoices({ name: '제목 검색', value: 'title' })
          .addChoices({ name: '저자 검색', value: 'author' })
          .addChoices({ name: '출판사 검색', value: 'publisher' }),
      )
      .addStringOption((option) =>
        option
          .setName('search-target')
          .setDescription('검색 타겟')
          .addChoices({ name: '(기본값)도서', value: 'book' })
          .addChoices({ name: '외국도서', value: 'foreign' })
          .addChoices({ name: '음반', value: 'music' })
          .addChoices({ name: 'DVD', value: 'dvd' })
          .addChoices({ name: '중고샵(도서/음반/DVD 등)', value: 'used' })
          .addChoices({ name: '전자책', value: 'ebook' })
          .addChoices({ name: '전부', value: 'all' }),
      )
      .addNumberOption((option) =>
        option
          .setName('start')
          .setDescription('검색결과 시작페이지 (기본값: 1)')
          .setMinValue(1),
      )
      .addNumberOption((option) =>
        option
          .setName('max-results')
          .setDescription('검색결과 한 페이지당 최대 출력 개수 (기본값: 1)')
          .setMinValue(1)
          .setMaxValue(10),
      )
      .addStringOption((option) =>
        option
          .setName('sort')
          .setDescription('정렬 순서')
          .addChoices({ name: '(기본값) 관련도', value: 'accuracy' })
          .addChoices({ name: '출간일', value: 'publishtime' })
          .addChoices({ name: '제목', value: 'title' })
          .addChoices({ name: '판매량', value: 'salespoint' })
          .addChoices({ name: '고객 평점', value: 'customerrating' })
          .addChoices({ name: '마이리뷰갯수', value: 'myreviewcount' }),
      )
      .addStringOption((option) =>
        option
          .setName('cover')
          .setDescription('표지 이미지 크기')
          .addChoices({ name: '(기본값)없음', value: 'none' })
          .addChoices({ name: '큰 크기 : 너비 200px', value: 'big' })
          .addChoices({ name: '중간 큰 크기 : 너비 150px', value: 'midbig' })
          .addChoices({ name: '중간 크기 : 너비 85px', value: 'mid' })
          .addChoices({ name: '작은 크기 : 너비 75px', value: 'small' })
          .addChoices({ name: '매우 작은 크기 : 너비 65px', value: 'mini' }),
      )

    return command
  },
  execute: async (interaction) => {
    const value = commandOptionToJson<z.infer<typeof validation>>(
      [...interaction.options.data],
      validation,
    )

    if (!value) return interaction.reply('입력 타입이 올바르지 않습니다')

    const result = await searchBook(value)

    let embeds = result.item.map((item) => createBookEmbed(item))

    if (!embeds.length) {
      embeds = [new EmbedBuilder().setTitle('도서가 없습니다!').setTimestamp()]
    }

    interaction.reply({ embeds })
  },
}

export default search
