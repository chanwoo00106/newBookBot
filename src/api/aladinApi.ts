import axios, { AxiosHeaders } from 'axios'
import { ZodSchema } from 'zod'
import CustomError from './CustomError'

const axiosApi = axios.create({
  baseURL: 'https://www.aladin.co.kr/ttb/api',
})

axiosApi.interceptors.response.use(
  (value) => value,
  (error) => {
    console.log(error)
    throw new CustomError(error)
  },
)

interface AladinApiConfig {
  url: string
  method: 'get' | 'GET'
  body?: any
  params?: any
  headers?: AxiosHeaders
}

const aladinApi = async <T = any>(
  config: AladinApiConfig,
  validation?: ZodSchema,
) => {
  const { data } = await axiosApi<T>({
    ...config,
  })

  validation?.parse(data)

  return data
}

export default aladinApi
