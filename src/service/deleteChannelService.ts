import db from '../db'

const deleteChannelService = async (channelId: string) => {
  return db.channel.delete({
    where: {
      id: channelId,
    },
  })
}

export default deleteChannelService
