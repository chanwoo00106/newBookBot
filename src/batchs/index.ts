import fetchBookListBatch from './fetchBookListBatch'
import newBookList from './newBookList'
import removeOldBookBatch from './removeOldBookBatch'

const batchs = [newBookList, fetchBookListBatch, removeOldBookBatch]

export default batchs
