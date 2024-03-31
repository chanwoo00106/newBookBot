import { Client, TextChannel } from 'discord.js'
import db from '../db'

const alarm = {
  execute: async (client: Client<boolean>) => {
    const channels = (await db.channel.findMany({ select: { id: true } })).map(
      (i) => i.id,
    )

    const promises = channels.map((i) => {
      return new Promise(() => {
        const channel = client.channels.cache.get(i)
        if (!(channel instanceof TextChannel)) return

        channel.send('hello world')
      })
    })

    return promises
  },
  millisecond: 3000,
}

export default alarm
