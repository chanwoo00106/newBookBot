export type FetchTwoBooksResDto = {
  id: number
  title: string
  description: string | null
  link: string
  cover: string
  pubDate: Date
  categoryName: string
  publisher: string
  priceSales: number
  author: string
  createdAt: Date
}[]
