import Axios from 'axios'
import { MASK_URL } from '../constants'

const fetchMask = ({ method, url, baseURL = MASK_URL, data }) =>
  Axios({ method, url, baseURL, data })

export default fetchMask
