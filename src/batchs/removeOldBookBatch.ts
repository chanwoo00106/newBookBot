import dayjs from 'dayjs'
import db from '../db'
import BatchType from './BatchType'

const removeOldBookBatch: BatchType = {
  execute: async () => {
    if (dayjs().hour() !== 5) return

    const monthAgo = dayjs().subtract(1, 'month')

    await db.book.deleteMany({
      where: {
        createdAt: {
          lte: monthAgo.toDate(),
        },
      },
    })
  },
  millisecond: 60 * 60 * 1000, // 1시간
}

export default removeOldBookBatch
