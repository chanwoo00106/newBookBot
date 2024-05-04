import { db } from '@/shared'
import { AddBookListReqDto } from '../dto/AddBookListReqDto'

class DbBookDataSource {
  async addBookList(books: AddBookListReqDto) {
    db.book.createMany({
      data: books,
    })
  }
}

export default DbBookDataSource
