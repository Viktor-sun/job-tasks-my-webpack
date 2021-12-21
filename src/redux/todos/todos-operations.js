import actions from './todos-actions'
import { callApi } from '../../helpers/callApi'

const fetchTodos = () => dispatch => {
  dispatch(actions.fetchTodosRequest())

  callApi('/api/todos')
    .then(data => dispatch(actions.fetchTodosSuccess(data.data.todos)))
    .catch(e => dispatch(actions.fetchTodosError(e.message)))
}

const addTodo = todo => dispatch => {
  dispatch(actions.addTodoRequest())

  callApi('/api/todos', { method: 'POST', body: { todo } })
    .then(data => dispatch(actions.addTodoSuccess(data.data.todo)))
    .catch(e => dispatch(actions.addTodoError(e.message)))
}

const deleteTodo = id => dispatch => {
  dispatch(actions.deleteTodoRequest())

  callApi(`/api/todos/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(e => dispatch(actions.deleteTodoError(e.message)))
}

const selectTodo = (id, completed) => dispatch => {
  dispatch(actions.selectTodoRequest())

  callApi(`/api/todos/${id}`, { method: 'PATCH', body: { completed } })
    .then(data => dispatch(actions.selectTodoSuccess(data.data.todo)))
    .catch(e => dispatch(actions.selectTodoError(e.message)))
}

const updateTodo = (id, todo) => dispatch => {
  dispatch(actions.updateTodoRequest())

  return callApi(`/api/todos/${id}`, { method: 'PATCH', body: { todo } })
    .then(data => dispatch(actions.updateTodoSuccess(data.data.todo)))
    .catch(e => dispatch(actions.updateTodoError(e.message)))
}

export default { fetchTodos, addTodo, deleteTodo, selectTodo, updateTodo }
