import { aladinApi, db } from '@/shared'
import { AddBookListReqDto } from '../dto/AddBookListReqDto'
import { FetchTwoBooksResDto } from '../dto/FetchTwoBooksResDto'
import {
  FetchNewBookListResDto,
  FetchNewBookListResSchema,
} from '../dto/FetchNewBookListResDto'

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

  async fetchNewBookList(maxCount: number) {
    return aladinApi<FetchNewBookListResDto>(
      {
        method: 'get',
        url: '/ItemList.aspx',
        params: {
          ttbkey: process.env.TTB_KEY,
          QueryType: 'ItemNewSpecial',
          MaxResults: maxCount,
          Start: 1,
          SearchTarget: 'Book',
          output: 'js',
          Version: '20131101',
          CategoryId: '351',
        },
      },
      FetchNewBookListResSchema,
    )
  }
}

export default DbBookDataSource
