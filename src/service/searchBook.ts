import aladinApi from '../api/aladinApi'
import {
  NewBookListRes,
  NewBookListResSchema,
} from '../models/res/NewBookListRes'

interface Param {
  query: string
  querytype: string
  searchtarget: string
  start: number
  maxresults: number
  sort: string
  cover: string
}

const searchBook = async (params: Param) => {
  return aladinApi<NewBookListRes>(
    {
      method: 'get',
      url: '/ItemSearch.aspx',
      params: {
        ttbkey: process.env.TTB_KEY,
        output: 'js',
        Version: '20131101',
        CategoryId: '351',
        ...params,
      },
    },
    NewBookListResSchema,
  )
}

export default searchBook
