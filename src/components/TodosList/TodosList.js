import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'
import s from './TodosList.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'

export class TodosList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  updateTodo(id, value) {
    if (value === '') {
      return this.props.deleteTodo(id)
    }
    return this.props.updateTodo(id, value)
  }

  render() {
    const { todos, selectTodo, deleteTodo } = this.props

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
              onUpdate={this.updateTodo.bind(this)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ todos: todosSelectors.getTodos(state) })

const { fetchTodos, deleteTodo, selectTodo, updateTodo } = todosOperations
const mapDispatchToProps = {
  fetchTodos,
  deleteTodo,
  selectTodo,
  updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
