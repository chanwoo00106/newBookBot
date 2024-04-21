import { ZodSchema } from 'zod'

export interface RequestConfig {
  url: string
  method: string
  body: any
  params: any
}

interface HttpClient {
  request<R = any>(config: RequestConfig, validation?: ZodSchema): Promise<R>
}

export default HttpClient
