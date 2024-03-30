import { REST, Routes } from 'discord.js'
import commands from './commands'

const commandDatas = Object.values(commands).map((command) =>
  command.data.toJSON(),
)

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN || '')

const setupCommands = async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID || '',
        process.env.GUILD_ID || '',
      ),
      {
        body: commandDatas,
      },
    )
  } catch (e) {
    console.log(e)
  }
}

export default setupCommands
