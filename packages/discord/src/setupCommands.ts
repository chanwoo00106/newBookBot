import { REST, Routes } from 'discord.js'
import commands from './commands'

const commandDatas = Object.values(commands).map((command) => {
  if (typeof command.data === 'function') return command.data()
  return command.data
})

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN || '')

const setupCommands = async () => {
  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID || ''), {
      body: commandDatas,
    })
  } catch (e) {
    console.log(e)
  }
}

export default setupCommands
