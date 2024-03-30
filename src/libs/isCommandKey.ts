import commands from '../commands'

type CommandKey = keyof typeof commands

const isCommandKey = (commandName: string): commandName is CommandKey => {
  return commandName in commands
}

export default isCommandKey
