import { Client, Events } from 'discord.js'
import { addGuild } from '../service'
import isExistGuild from '../service/isExistGuild'

const guildCreate = (client: Client<boolean>) => {
  client.on(Events.GuildCreate, async (guild) => {
    if (await isExistGuild(guild.id)) return

    addGuild(guild)
  })
}

export default guildCreate
