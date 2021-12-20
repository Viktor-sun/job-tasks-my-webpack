import actionTypes from './users-types'

const logupRequest = () => ({ type: actionTypes.USERS_LOGUP_REQUEST })
const logupSuccess = value => ({
  type: actionTypes.USERS_LOGUP_SUCCESS,
  payload: value,
})
const logupError = value => ({
  type: actionTypes.USERS_LOGUP_ERROR,
  payload: value,
})

const loginRequest = () => ({ type: actionTypes.USERS_LOGUP_REQUEST })
const loginSuccess = value => ({
  type: actionTypes.USERS_LOGUP_SUCCESS,
  payload: value,
})
const loginError = value => ({
  type: actionTypes.USERS_LOGUP_ERROR,
  payload: value,
})

export default {
  logupRequest,
  logupSuccess,
  logupError,
  loginRequest,
  loginSuccess,
  loginError,
}
