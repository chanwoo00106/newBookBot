import { Book } from '@prisma/client'
import db from '../db'

const updateViewedBooks = async (books: Book[], channel: string) => {
  return new Promise((resolve) => {
    resolve(
      db.channelsOnBooks.createMany({
        data: books.map((book) => ({
          bookId: book.id,
          channelId: channel,
        })),
      }),
    )
  })
}

export default updateViewedBooks
