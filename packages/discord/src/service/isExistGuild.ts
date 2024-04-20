import db from '../db'

const isExistGuild = async (guildId: string) => {
  const guild = await db.guild.findFirst({ where: { id: guildId } })

  return !!guild
}

export default isExistGuild
