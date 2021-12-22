import { createAsyncActions } from '@utils/redux-tools'

const fetchTodo = createAsyncActions('todos/fetchTodos')
const addTodo = createAsyncActions('todos/addTodo')
const deleteTodo = createAsyncActions('todos/deleteTodo')
const selectTodo = createAsyncActions('todos/selectTodo')
const updateTodo = createAsyncActions('todos/updateTodo')
const selectAllTodo = createAsyncActions('todos/selectAllTodo')
const unselectAllTodo = createAsyncActions('todos/unselectAllTodo')
const clearCompleted = createAsyncActions('todos/clearCompleted')

export default {
  fetchTodo,
  addTodo,
  deleteTodo,
  selectTodo,
  updateTodo,
  selectAllTodo,
  unselectAllTodo,
  clearCompleted,
}
