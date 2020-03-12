import Axios from 'axios'
import { POST_URL } from '../constants'

export const fetchData = ({ method, url, baseURL = POST_URL, data, headers }) =>
  Axios({ method, url, baseURL, data, headers, timeout: 500 })
