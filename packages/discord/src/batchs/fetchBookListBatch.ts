import dayjs from 'dayjs'
import { fetchNewBookList } from '../service'
import { Book } from '@prisma/client'
import AddBooks from '../service/addBooks'
import BatchType from './BatchType'

const ignoreCategory = [
  '그래픽/멀티미디어',
  '오피스(엑셀/파워포인트)',
  '웹디자인/홈페이지',
  '초중고 소프트웨어 교육/코딩',
  '편집자 기획 특선',
  '활용능력',
  'PC/게임/디지털 카메라',
  'SNS',
  '종교',
  '어린이',
  '초등학교참고서',
  '만화',
]

const fetchBookListBatch: BatchType = {
  execute: async () => {
    if (dayjs().hour() !== 5) return null

    const data = await fetchNewBookList({ MaxResults: 100 })

    const result = data.item
      .filter(
        (item) => !ignoreCategory.find((i) => item.categoryName.includes(i)),
      )
      .map<Book>((item) => ({
        id: item.itemId,
        title: item.title,
        description: item.description || null,
        link: item.link,
        cover: item.cover,
        pubDate: new Date(item.pubDate),
        categoryName: item.categoryName,
        publisher: item.publisher,
        priceSales: item.priceSales,
        author: item.author,
        createdAt: new Date(),
      }))

    return [
      new Promise((resolve) => {
        resolve(AddBooks(result))
      }),
    ]
  },
  millisecond: 60 * 60 * 1000, // 1시간
}

export default fetchBookListBatch
