import { Book } from '@prisma/client'
import db from '../db'

const AddBooks = async (books: Book[]) => {
  return db.book.createMany({
    data: books,
    skipDuplicates: true,
  })
}

export default AddBooks
