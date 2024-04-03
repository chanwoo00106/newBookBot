import BatchType from './BatchType'
import fetchBookListBatch from './fetchBookListBatch'
import newBookList from './newBookList'
import removeOldBookBatch from './removeOldBookBatch'

const batchs: BatchType[] = [
  newBookList,
  fetchBookListBatch,
  removeOldBookBatch,
]

export default batchs
