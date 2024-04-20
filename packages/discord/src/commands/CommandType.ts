import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

type CommandDataType = () => SlashCommandBuilder

interface CommandType {
  data: CommandDataType | SlashCommandBuilder
  execute: (interaction: CommandInteraction) => Promise<any>
}

export default CommandType
