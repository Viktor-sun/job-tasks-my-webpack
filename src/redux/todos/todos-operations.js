import actions from './todos-actions'
import { callApi } from '../../helpers/callApi'

const fetchTodos = () => dispatch => {
  dispatch(actions.fetchTodosRequest())

  callApi('/api/todos')
    .then(data => dispatch(actions.fetchTodosSuccess(data.data.todos)))
    .catch(e => dispatch(actions.fetchTodosError(e)))
}

const addTodo = todo => dispatch => {
  dispatch(actions.addTodoRequest())

  callApi('/api/todos', { method: 'POST', body: { todo } })
    .then(data => dispatch(actions.addTodoSuccess(data.data.todo)))
    .catch(e => dispatch(actions.addTodoError(e)))
}

const deleteTodo = id => dispatch => {
  dispatch(actions.deleteTodoRequest())

  callApi(`/api/todos/${id}`, { method: 'DELETE' })
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(e => dispatch(actions.deleteTodoError(e)))
}

export default { fetchTodos, addTodo, deleteTodo }
