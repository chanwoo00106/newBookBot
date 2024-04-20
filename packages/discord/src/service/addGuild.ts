import { Guild } from 'discord.js'
import db from '../db'

const addGuild = async (guild: Guild) => {
  return db.guild.create({
    data: {
      id: guild.id,
    },
  })
}

export default addGuild
