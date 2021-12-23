const getTodos = state => state.todos.todos
const getActiveTodos = state =>
  state.todos.todos.filter(todo => !todo.completed)
const getCompletedTodos = state =>
  state.todos.todos.filter(todo => todo.completed)
const getFilter = state => state.todos.filter
const getLoading = state => state.todos.loading

export default {
  getTodos,
  getActiveTodos,
  getCompletedTodos,
  getFilter,
  getLoading,
}
