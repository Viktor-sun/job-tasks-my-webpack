import { combineReducers } from 'redux'
import actionsTypes from './users-types'

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionsTypes.USERS_LOGUP_SUCCESS:
      return payload
    case actionsTypes.USERS_LOGIN_SUCCESS:
      return payload
    default:
      return state
  }
}

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionsTypes.USERS_LOGUP_ERROR:
      return payload
    case actionsTypes.USERS_LOGIN_ERROR:
      return payload
    case actionsTypes.USERS_LOGUP_SUCCESS:
      return null
    case actionsTypes.USERS_LOGIN_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({ user: userReducer, error: errorReducer })
