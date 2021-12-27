import { createAsyncActions } from '@utils/redux-tools'

const logup = createAsyncActions('users/logup')
const login = createAsyncActions('users/login')
const logout = createAsyncActions('users/logout')
const current = createAsyncActions('users/current')

export default { logup, login, logout, current }
