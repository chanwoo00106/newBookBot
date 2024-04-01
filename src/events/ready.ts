import { Client, Events } from 'discord.js'

const ready = (client: Client<boolean>) => {
  client.on(Events.ClientReady, () => {
    console.log(`${client.user?.username} ready`)
  })
}

export default ready
