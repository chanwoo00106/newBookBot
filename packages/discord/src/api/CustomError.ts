import { isAxiosError } from 'axios'
import { ZodError } from 'zod'

class CustomError {
  readonly isCustomError: true = true
  readonly method?: string
  readonly baseUrl?: string
  readonly url?: string
  readonly statusCode?: number
  readonly message: string

  constructor(error: unknown) {
    if (error instanceof ZodError) {
      this.message = 'api 변경으로 인한 실패'
      return
    }

    if (!isAxiosError(error)) {
      this.message = '알 수 없는 문제'
      return
    }

    this.message = 'api 요청 실패'

    this.statusCode = error.response?.status
    this.method = error.response?.config.method
    this.baseUrl = error.response?.config.baseURL
    this.url = error.response?.config.url
  }
}

export default CustomError
