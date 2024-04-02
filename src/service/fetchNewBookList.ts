import aladinApi from '../api/aladinApi'
import {
  NewBookListRes,
  NewBookListResSchema,
} from '../models/res/NewBookListRes'

interface Params {
  MaxResults: number
}

const fetchNewBookList = ({ MaxResults }: Params) => {
  return aladinApi<NewBookListRes>(
    {
      method: 'get',
      url: '/ItemList.aspx',
      params: {
        ttbkey: process.env.TTB_KEY,
        QueryType: 'ItemNewSpecial',
        MaxResults,
        Start: 1,
        SearchTarget: 'Book',
        output: 'js',
        Version: '20131101',
        CategoryId: '351',
      },
    },
    NewBookListResSchema,
  )
}

export default fetchNewBookList
