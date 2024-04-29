import { EmbedBuilder, TextChannel } from 'discord.js'
import db from '../db'
import dayjs from 'dayjs'
import findTwoBooks from '../service/findTwoBooks'
import { updateViewedBooks } from '../service'
import BatchType from './BatchType'
import { createBookEmbed } from '../embeds'

const newBookList: BatchType = {
  execute: async (client) => {
    if (dayjs().format('HH:mm') !== '07:00') return null

    const data = await findTwoBooks()

    const channels = (await db.channel.findMany({ select: { id: true } })).map(
      (i) => i.id,
    )

    let embeds = data.map((item) => createBookEmbed(item))

    if (!embeds.length) {
      embeds = [new EmbedBuilder().setTitle('신간 도서가 없습니다!')]
    }

    const promises = channels.map((i) => {
      return new Promise(() => {
        try {
          updateViewedBooks(data, i)

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
