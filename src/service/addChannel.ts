import { TextBasedChannel } from 'discord.js'
import db from '../db'

const addChannel = async (guildId: string, channel: TextBasedChannel) => {
  return db.channel.create({
    data: {
      guildId,
      id: channel.id,
    },
  })
}

export default addChannel
