import { actionsUsers } from '../actions'
import { callApi } from '../../helpers/callApi'

const logup = credentials => dispatch => {
  dispatch(actionsUsers.logup.Request())

  callApi('/api/users/signup', { method: 'POST', body: credentials })
    .then(data => dispatch(actionsUsers.logup.Success(data.data.user)))
    .catch(e => dispatch(actionsUsers.logup.Error(e.message)))
}

const login = credentials => dispatch => {
  dispatch(actionsUsers.logup.Request())

  callApi('/api/users/login', { method: 'POST', body: credentials })
    .then(data => dispatch(actionsUsers.logup.Success(data.data.user)))
    .catch(e => dispatch(actionsUsers.logup.Error(e.message)))
}

export default { logup, login }
