import { EmbedBuilder, TextChannel } from 'discord.js'
import db from '../db'
import dayjs from 'dayjs'
import { numberToPrice } from '../libs'
import findTwoBooks from '../service/findTwoBooks'
import { updateViewedBooks } from '../service'
import BatchType from './BatchType'

const newBookList: BatchType = {
  execute: async (client) => {
    if (dayjs().format('HH:mm') !== '07:00') return null

    const data = await findTwoBooks()
    updateViewedBooks(data)

    const channels = (await db.channel.findMany({ select: { id: true } })).map(
      (i) => i.id,
    )

    let embeds = data.map((item) => {
      return new EmbedBuilder()
        .setTitle(item.title)
        .setDescription(item.description)
        .setURL(item.link)
        .setImage(item.cover)
        .setTimestamp(dayjs().toDate())
        .addFields([
          {
            name: '출간일',
            value: dayjs(item.pubDate).format('YYYY년 MM월 DD일'),
          },
          {
            name: '카테고리',
            value: item.categoryName,
          },
          {
            name: '출판사',
            value: item.publisher,
          },
          {
            name: '가격',
            value: numberToPrice(item.priceSales),
          },
        ])
        .setFooter({
          text: item.author,
        })
    })

    if (!embeds.length) {
      embeds = [new EmbedBuilder().setTitle('신간 도서가 없습니다!')]
    }

    const promises = channels.map((i) => {
      return new Promise(() => {
        try {
          const channel = client.channels.cache.get(i)
          if (!(channel instanceof TextChannel)) return

          channel.send({ embeds })
        } catch (e) {}
      })
    })

    return promises
  },
  millisecond: 60 * 1000, // 1분
}

export default newBookList
