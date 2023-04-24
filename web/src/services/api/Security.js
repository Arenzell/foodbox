import api from './Api'
const path = '/security'

const signin = async (email, password) =>
    api.post(`${path}/signin`, { email, password })

const signup = async data =>
    api.post(`${path}/signup`, data)

export default { signin, signup }
