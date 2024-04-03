import { Client } from 'discord.js'

interface BatchType {
  execute: (
    client: Client<boolean>,
  ) => Promise<Promise<unknown>[] | null | void>
  millisecond: number
}

export default BatchType
