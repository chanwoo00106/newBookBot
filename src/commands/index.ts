import deleteChannel from './deleteChannel'
import ping from './ping'
import register from './register'

const commands = { ping, register, 'delete-channel': deleteChannel } as const

export default commands
