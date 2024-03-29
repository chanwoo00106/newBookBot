import axios, { Method } from 'axios'
import CustomError from './CustomError'
import { ZodSchema } from 'zod'

const axiosApi = axios.create({
  baseURL: 'https://www.aladin.co.kr/ttb/api',
})

export interface AladinApiReqInfo<
  B extends object = any,
  P extends object = any,
  H extends object = any,
> {
  metohd: Method
  url: string
  params: P
  data: B
  headers: H
}

const aladinApi = async <R = any>(
  reqInfo: AladinApiReqInfo,
  validation?: ZodSchema,
): Promise<R> => {
  try {
    const { data } = await axiosApi<R>({
      ...reqInfo,
      params: {
        ...reqInfo.params,
        ttbkey: process.env.TTB_KEY,
      },
    })

    validation?.parse(data)

    return data
  } catch (e) {
    throw new CustomError(e)
  }
}

export default aladinApi
