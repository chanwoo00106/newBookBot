import { Book } from '@prisma/client'
import db from '../db'

const updateViewedBooks = async (books: Book[]) => {
  const promises = books.map((book) => {
    return new Promise((resolve) => {
      resolve(
        db.book.update({
          where: {
            id: book.id,
          },
          data: {
            views: book.views + 1,
          },
        }),
      )
    })
  })

  return Promise.all(promises)
}

export default updateViewedBooks
