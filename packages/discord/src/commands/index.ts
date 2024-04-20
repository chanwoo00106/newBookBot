import CommandType from './CommandType'
import deleteChannel from './deleteChannel'
import ping from './ping'
import register from './register'
import search from './search'

const commands: Record<string, CommandType> = {
  ping,
  register,
  'delete-channel': deleteChannel,
  search,
} as const

export default commands
