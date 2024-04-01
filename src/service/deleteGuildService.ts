import db from '../db'

const deleteGuildService = (guildId: string) => {
  db.guild.delete({
    where: { id: guildId },
  })
}

export default deleteGuildService
