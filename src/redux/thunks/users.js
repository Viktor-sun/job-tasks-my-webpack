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
    .then(data => dispatch(actionsUsers.login.Success(data.data.user)))
    .catch(e => dispatch(actionsUsers.login.Error(e.message)))
}

const logout = userId => dispatch => {
  dispatch(actionsUsers.logout.Request())

  callApi('/api/users/logout', { method: 'POST', body: { _id: userId } })
    .then(data => dispatch(actionsUsers.logout.Success(data.data.user)))
    .catch(e => dispatch(actionsUsers.logout.Error(e.message)))
}

const getCurrent = () => (dispatch, getState) => {
  const persistedUserId = getState().user.user._id
  if (!persistedUserId) return

  dispatch(actionsUsers.current.Request())
  callApi(`/api/users/current/${persistedUserId}`)
    .then(data => dispatch(actionsUsers.current.Success(data.data.user)))
    .catch(e => dispatch(actionsUsers.current.Error(e.message)))
}

export default { logup, login, logout, getCurrent }
