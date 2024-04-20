import { EmbedBuilder } from 'discord.js'
import dayjs from 'dayjs'
import { numberToPrice } from '../libs'
import { Book } from '@prisma/client'
import { Item } from '../models/res/NewBookListRes'

const createBookEmbed = (item: Book | Item) => {
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
}

export default createBookEmbed
