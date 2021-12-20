import actionTypes from './todos-types'

const fetchTodosRequest = () => ({ type: actionTypes.FETCH_TODOS_REQUEST })
const fetchTodosSuccess = value => ({
  type: actionTypes.FETCH_TODOS_SUCCESS,
  payload: value,
})
const fetchTodosError = value => ({
  type: actionTypes.FETCH_TODOS_ERROR,
  payload: value,
})

export default { fetchTodosRequest, fetchTodosSuccess, fetchTodosError }
