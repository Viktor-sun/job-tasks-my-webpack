import actions from './todos-actions'

const fetchTodos = () => dispatch => {
  dispatch(actions.fetchTodosRequest())
}

export default { fetchTodos }
