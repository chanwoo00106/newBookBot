import { z } from 'zod'

export const AddBookListReqSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  link: z.string(),
  cover: z.string(),
  pubDate: z.date(),
  categoryName: z.string(),
  publisher: z.string(),
  priceSales: z.number(),
  author: z.string(),
})

export type AddBookListReqDto = z.infer<typeof AddBookListReqSchema>[]
