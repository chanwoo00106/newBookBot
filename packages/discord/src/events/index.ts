import { Client } from 'discord.js'
import ready from './ready'
import interaction from './interaction'
import guildCreate from './guildCreate'

const events = (client: Client<boolean>) => {
  ready(client)
  interaction(client)
  guildCreate(client)
}

export default events
