import { isAxiosError } from 'axios'
import { ZodError } from 'zod'

class HttpError {
  statusCode?: number
  method?: string
  url?: string
  message: string

  constructor(e: unknown) {
    this.message = '오류가 발생했습니다'

    if (e instanceof ZodError) return
    if (!isAxiosError(e)) return

    this.statusCode = e.response?.status
    this.method = e.response?.config.method
    this.url = e.response?.config.url
  }
}

export default HttpError
