import { actionsTodos } from '../actions'
import { callApi } from '../../helpers/callApi'

const fetchTodos = () => dispatch => {
  dispatch(actionsTodos.fetchTodo.Request())

  callApi('/api/todos')
    .then(data => dispatch(actionsTodos.fetchTodo.Success(data.data.todos)))
    .catch(e => dispatch(actionsTodos.fetchTodo.Error(e.message)))
}

const addTodo = todo => dispatch => {
  dispatch(actionsTodos.addTodo.Request())

  callApi('/api/todos', { method: 'POST', body: { todo } })
    .then(data => dispatch(actionsTodos.addTodo.Success(data.data.todo)))
    .catch(e => dispatch(actionsTodos.addTodo.Error(e.message)))
}

const deleteTodo = id => dispatch => {
  dispatch(actionsTodos.deleteTodo.Request())

  callApi(`/api/todos/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actionsTodos.deleteTodo.Success(id)))
    .catch(e => dispatch(actionsTodos.deleteTodo.Error(e.message)))
}

const selectTodo = (id, completed) => dispatch => {
  dispatch(actionsTodos.selectTodo.Request())

  callApi(`/api/todos/${id}`, { method: 'PATCH', body: { completed } })
    .then(data => dispatch(actionsTodos.selectTodo.Success(data.data.todo)))
    .catch(e => dispatch(actionsTodos.selectTodo.Error(e.message)))
}

const updateTodo = (id, todo) => dispatch => {
  dispatch(actionsTodos.updateTodo.Request())

  return callApi(`/api/todos/${id}`, { method: 'PATCH', body: { todo } })
    .then(data => dispatch(actionsTodos.updateTodo.Success(data.data.todo)))
    .catch(e => dispatch(actionsTodos.updateTodo.Error(e.message)))
}

const selectAllTodo = () => dispatch => {
  dispatch(actionsTodos.selectAllTodo.Request())

  return callApi('/api/todos/select', { method: 'POST' })
    .then(() => dispatch(actionsTodos.selectAllTodo.Success()))
    .catch(e => dispatch(actionsTodos.selectAllTodo.Error(e.message)))
}

const unselectAllTodo = () => dispatch => {
  dispatch(actionsTodos.unselectAllTodo.Request())

  return callApi('/api/todos/unselect', { method: 'POST' })
    .then(() => dispatch(actionsTodos.unselectAllTodo.Success()))
    .catch(e => dispatch(actionsTodos.unselectAllTodo.Error(e.message)))
}

const clearCompleted = () => dispatch => {
  dispatch(actionsTodos.clearCompleted.Request())

  return callApi('/api/todos/clear', { method: 'POST' })
    .then(() => dispatch(actionsTodos.clearCompleted.Success()))
    .catch(e => dispatch(actionsTodos.clearCompleted.Error(e.message)))
}

export default {
  fetchTodos,
  addTodo,
  deleteTodo,
  selectTodo,
  updateTodo,
  selectAllTodo,
  unselectAllTodo,
  clearCompleted,
}
