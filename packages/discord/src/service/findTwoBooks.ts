import db from '../db'

const findTwoBooks = async (channelId: string) => {
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

export default findTwoBooks
