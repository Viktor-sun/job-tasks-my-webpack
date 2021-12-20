import actionTypes from './todos-types'

const createAction = type => payload => ({ type, payload })

const fetchTodosRequest = createAction(actionTypes.FETCH_TODOS_REQUEST)
const fetchTodosSuccess = createAction(actionTypes.FETCH_TODOS_SUCCESS)
const fetchTodosError = createAction(actionTypes.FETCH_TODOS_ERROR)

// const fetchTodosRequest = () => ({ type: actionTypes.FETCH_TODOS_REQUEST })
// const fetchTodosSuccess = value => ({
//   type: actionTypes.FETCH_TODOS_SUCCESS,
//   payload: value,
// })
// const fetchTodosError = value => ({
//   type: actionTypes.FETCH_TODOS_ERROR,
//   payload: value,
// })

const addTodoRequest = createAction(actionTypes.ADD_TODO_REQUEST)
const addTodoSuccess = createAction(actionTypes.ADD_TODO_SUCCESS)
const addTodoError = createAction(actionTypes.ADD_TODO_ERROR)

// const addTodoRequest = () => ({ type: actionTypes.ADD_TODO_REQUEST })
// const addTodoSuccess = value => ({
//   type: actionTypes.ADD_TODO_SUCCESS,
//   payload: value,
// })
// const addTodoError = value => ({
//   type: actionTypes.ADD_TODO_ERROR,
//   payload: value,
// })

const deleteTodoRequest = () => ({ type: actionTypes.DELETE_TODO_REQUEST })
const deleteTodoSuccess = value => ({
  type: actionTypes.DELETE_TODO_SUCCESS,
  payload: value,
})
const deleteTodoError = value => ({
  type: actionTypes.DELETE_TODO_ERROR,
  payload: value,
})

const selectTodoRequest = () => ({ type: actionTypes.SELECT_TODO_REQUEST })
const selectTodoSuccess = value => ({
  type: actionTypes.SELECT_TODO_SUCCESS,
  payload: value,
})
const selectTodoError = value => ({
  type: actionTypes.SELECT_TODO_ERROR,
  payload: value,
})

export default {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  selectTodoRequest,
  selectTodoSuccess,
  selectTodoError,
}
