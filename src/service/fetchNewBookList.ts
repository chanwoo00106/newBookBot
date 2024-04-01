import aladinApi from '../api/aladinApi'
import {
  NewBookListRes,
  NewBookListResSchema,
} from '../models/res/NewBookListRes'

const fetchNewBookList = () => {
  return aladinApi<NewBookListRes>(
    {
      method: 'get',
      url: '/ItemList.aspx',
      params: {
        ttbkey: process.env.TTB_KEY,
        QueryType: 'ItemNewSpecial',
        MaxResults: 2,
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
