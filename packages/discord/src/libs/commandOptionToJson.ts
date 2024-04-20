import { CacheType, CommandInteractionOption } from 'discord.js'
import { ZodSchema } from 'zod'

const commandOptionToJson = <R extends object = any>(
  commandOption: CommandInteractionOption<CacheType>[],
  validation: ZodSchema,
): R | null => {
  try {
    const result: Record<string, string | number | boolean> = {}

    commandOption.forEach((i) => {
      if (!i.value) return
      result[i.name.replace('-', '')] = i.value
    })

    return validation.parse(result)
  } catch (e) {
    console.log(e)
    return null
  }
}

export default commandOptionToJson
