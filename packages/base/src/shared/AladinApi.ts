import axios from 'axios'

const AladinApi = axios.create({
  baseURL: 'https://www.aladin.co.kr/ttb/api',
})

export default AladinApi
