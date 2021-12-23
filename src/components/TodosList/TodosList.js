import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'
import s from './TodosList.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'

export class TodosList extends Component {
  constructor(props) {
    super(props)
    this.updateTodo = this.updateTodo.bind(this)
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  updateTodo(id, value) {
    if (value === '') {
      return this.props.deleteTodo(id)
    }
    return this.props.updateTodo(id, value)
  }

  getFilteredTodos() {
    const { todos, todosAtive, todosCompleted, filter } = this.props

    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todosAtive
      case 'completed':
        return todosCompleted

      default:
        return todos
    }
  }

  render() {
    const { selectTodo, deleteTodo } = this.props
    const todos = this.getFilteredTodos()

    return (
      <div className="todoContainer">
        <ul className={s.list}>
          {todos.map(({ _id, todo, completed }) => (
            <TodoItem
              key={_id}
              id={_id}
              todo={todo}
              completed={completed}
              onSelect={selectTodo}
              onDelete={deleteTodo}
              onUpdate={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: todosSelectors.getTodos(state),
  todosAtive: todosSelectors.getActiveTodos(state),
  todosCompleted: todosSelectors.getCompletedTodos(state),
  filter: todosSelectors.getFilter(state),
})

const { fetchTodos, deleteTodo, selectTodo, updateTodo } = todosOperations
const mapDispatchToProps = {
  fetchTodos,
  deleteTodo,
  selectTodo,
  updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
