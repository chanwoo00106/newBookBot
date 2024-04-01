import z from 'zod'

export const SeriesInfoSchema = z.object({
  seriesId: z.number(),
  seriesLink: z.string(),
  seriesName: z.string(),
})
export type SeriesInfo = z.infer<typeof SeriesInfoSchema>

export const ItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  author: z.string(),
  pubDate: z.string(),
  description: z.string(),
  isbn: z.string(),
  isbn13: z.string(),
  itemId: z.number(),
  priceSales: z.number(),
  priceStandard: z.number(),
  mallType: z.enum(['BOOK', 'Foreign', 'Music', 'DVD', 'Used', 'eBook', 'All']),
  stockStatus: z.string(),
  mileage: z.number(),
  cover: z.string(),
  categoryId: z.number(),
  categoryName: z.string(),
  publisher: z.string(),
  salesPoint: z.number(),
  adult: z.boolean(),
  fixedPrice: z.boolean(),
  customerReviewRank: z.number(),
  bestRank: z.number().optional(),
  seriesInfo: z.union([SeriesInfoSchema, z.null()]).optional(),
  subInfo: z.any(),
})
export type Item = z.infer<typeof ItemSchema>

export const NewBookListResSchema = z.object({
  version: z.string(),
  logo: z.string(),
  title: z.string(),
  link: z.string(),
  pubDate: z.string(),
  totalResults: z.number(),
  startIndex: z.number(),
  itemsPerPage: z.number(),
  query: z.string(),
  searchCategoryId: z.number(),
  searchCategoryName: z.string(),
  item: z.array(ItemSchema),
})
export type NewBookListRes = z.infer<typeof NewBookListResSchema>
