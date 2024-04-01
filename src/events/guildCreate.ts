import { Client, Events } from 'discord.js'
import { addGuild } from '../service'

const guildCreate = (client: Client<boolean>) => {
  client.on(Events.GuildCreate, (guild) => {
    addGuild(guild)
  })
}

export default guildCreate
