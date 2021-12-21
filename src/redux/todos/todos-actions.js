// const createAction = type => payload => ({ type, payload })
const createAction = type => payload => ({
  type,
  payload,
  toString() {
    return this.type
  },
})

const fetchTodosRequest = createAction('todos/fetchTodosRequest')
const fetchTodosSuccess = createAction('todos/fetchTodosSuccess')
const fetchTodosError = createAction('todos/fetchTodosError')

const addTodoRequest = createAction('todos/addTodoRequest')
const addTodoSuccess = createAction('todos/addTodoSuccess')
const addTodoError = createAction('todos/addTodoError')

const deleteTodoRequest = createAction('todos/deleteTodoRequest')
const deleteTodoSuccess = createAction('todos/deleteTodoSuccess')
const deleteTodoError = createAction('todos/deleteTodoError')

const selectTodoRequest = createAction('todos/selectTodoRequest')
const selectTodoSuccess = createAction('todos/selectTodoSuccess')
const selectTodoError = createAction('todos/selectTodoError')

// const fetchTodosRequest = () => ({ type: actionTypes.FETCH_TODOS_REQUEST })
// const fetchTodosSuccess = value => ({
//   type: actionTypes.FETCH_TODOS_SUCCESS,
//   payload: value,
// })
// const fetchTodosError = value => ({
//   type: actionTypes.FETCH_TODOS_ERROR,
//   payload: value,
// })

// const addTodoRequest = () => ({ type: actionTypes.ADD_TODO_REQUEST })
// const addTodoSuccess = value => ({
//   type: actionTypes.ADD_TODO_SUCCESS,
//   payload: value,
// })
// const addTodoError = value => ({
//   type: actionTypes.ADD_TODO_ERROR,
//   payload: value,
// })

// const deleteTodoRequest = () => ({ type: actionTypes.DELETE_TODO_REQUEST })
// const deleteTodoSuccess = value => ({
//   type: actionTypes.DELETE_TODO_SUCCESS,
//   payload: value,
// })
// const deleteTodoError = value => ({
//   type: actionTypes.DELETE_TODO_ERROR,
//   payload: value,
// })

// const selectTodoRequest = () => ({ type: actionTypes.SELECT_TODO_REQUEST })
// const selectTodoSuccess = value => ({
//   type: actionTypes.SELECT_TODO_SUCCESS,
//   payload: value,
// })
// const selectTodoError = value => ({
//   type: actionTypes.SELECT_TODO_ERROR,
//   payload: value,
// })

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
