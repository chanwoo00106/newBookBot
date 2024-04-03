import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

interface CommandType {
  data: SlashCommandBuilder
  execute: (interaction: CommandInteraction) => Promise<any>
}

export default CommandType
