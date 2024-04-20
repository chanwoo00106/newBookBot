import db from '../db'

const isExistChannel = async (channelId?: string | null) => {
  const channel = await db.channel.findFirst({
    where: { id: channelId || '' },
  })

  return !!channel
}

export default isExistChannel
