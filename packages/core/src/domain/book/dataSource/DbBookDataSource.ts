import { db } from '@/shared'
import { AddBookListReqDto } from '../dto/AddBookListReqDto'
import { FetchTwoBooksResDto } from '../dto/FetchTwoBooksResDto'

class DbBookDataSource {
  async addBookList(books: AddBookListReqDto) {
    db.book.createMany({
      data: books,
    })
  }

  async fetchTwoBooks(channelId: string): Promise<FetchTwoBooksResDto> {
    return db.book.findMany({
      where: {
        NOT: {
          channels: { some: { channelId } },
        },
      },
      orderBy: [{ id: 'desc' }],
      take: 2,
    })
  }
}

export default DbBookDataSource
