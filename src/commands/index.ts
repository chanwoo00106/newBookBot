import CommandType from './CommandType'
import deleteChannel from './deleteChannel'
import ping from './ping'
import register from './register'

const commands: Record<string, CommandType> = {
  ping,
  register,
  'delete-channel': deleteChannel,
} as const

export default commands
