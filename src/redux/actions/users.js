import { createAsyncActions } from '@utils/redux-tools'

const logup = createAsyncActions('users/logup')
const login = createAsyncActions('users/login')

export default { logup, login }
