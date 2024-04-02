import db from '../db'

const findTwoBooks = async () => {
  return db.book.findMany({
    orderBy: [{ isViewed: 'asc' }, { id: 'desc' }],
    take: 2,
  })
}

export default findTwoBooks
