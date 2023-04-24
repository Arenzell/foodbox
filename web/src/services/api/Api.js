import axios from 'axios'
import { BASE_URL, API_PATH } from '../../config/properties'

const options = { baseURL: `${BASE_URL}${API_PATH}` }
const api = axios.create(options)

export default api
