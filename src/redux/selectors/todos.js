const getTodos = state => state.todos.todos
const getActiveTodos = state =>
  state.todos.todos.filter(todo => !todo.completed)
const getCompletedTodos = state =>
  state.todos.todos.filter(todo => todo.completed)
const getFilter = state => state.todos.filter

export default { getTodos, getActiveTodos, getCompletedTodos, getFilter }
