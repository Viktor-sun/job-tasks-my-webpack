import { combineReducers } from 'redux'
import actionsTypes from './todos-types'

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_TODOS_SUCCESS:
      return payload
    default:
      return state
  }
}

const todosError = (state = null, { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_TODOS_ERROR:
      return payload
    case actionsTypes.FETCH_TODOS_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({ todos: todosReducer, error: todosError })
