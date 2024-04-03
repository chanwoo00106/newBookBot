import dayjs from 'dayjs'
import db from '../db'

const removeOldBookBatch = {
  execute: async () => {
    if (dayjs().hour() !== 5) return

    const monthAgo = dayjs().set('month', -1)
    const books = await db.book.findMany()

    const oldBooks = books
      .filter((book) => dayjs(book.createdAt).isBefore(monthAgo))
      .map((book) => ({ id: book.id }))

    db.book.deleteMany({
      where: { OR: oldBooks },
    })
  },
  millisecond: 60 * 60 * 1000, // 1시간
}

export default removeOldBookBatch
