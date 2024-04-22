import HttpError from './HttpError'
import AladinApi from './AladinApi'
import HttpClient, { RequestConfig } from './interface/HttpClient'
import { ZodSchema } from 'zod'

class HttpClientImpl implements HttpClient {
  async request<R = any>(
    config: RequestConfig,
    validation: ZodSchema,
  ): Promise<R> {
    try {
      const { data } = await AladinApi<R>({
        ...config,
      })

      validation.parse(data)

      return data
    } catch (e) {
      throw new HttpError(e)
    }
  }
}

export default HttpClientImpl
