import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './TodosList.module.css'
import todosOperations from '../../redux/todos/todos-operations'
import todosSelectors from '../../redux/todos/todos-selectors'

export class TodosList extends Component {
  state = { renderInputUpdate: false, todoId: 0 }

  componentDidMount() {
    this.props.fetchTodos()
  }

  changeCheckbox = id => e => {
    this.props.selectTodo(id, e.target.checked)
  }

  onDelete = id => () => {
    this.props.deleteTodo(id)
  }

  onCopyText = id => e => {
    const text = this.props.todos.find(todo => todo._id === id).todo
    navigator.clipboard.writeText(text).then(() => console.log('copied', e))
  }

  onRenderInputUpdate = id => () => {
    this.setState({ renderInputUpdate: true, todoId: id })
  }

  onUpdate = id => e => {
    this.updateTodo(id, e)
  }

  onKeyDown = id => e => {
    if (e.code === 'Enter') {
      this.updateTodo(id, e)
    }
  }

  updateTodo(id, e) {
    const value = e.target.value.trim()
    if (value === '') {
      this.props.deleteTodo(id)
      return
    }

    this.props
      .updateTodo(id, value)
      .then(() => this.setState({ renderInputUpdate: false, todoId: 0 }))
  }

  render() {
    const { renderInputUpdate, todoId } = this.state
    const { todos } = this.props

    return (
      <div className="todoContainer">
        <ul className={s.list}>
          {todos.map(todo => (
            <li
              onDoubleClick={this.onRenderInputUpdate(todo._id)}
              key={todo._id}
              className={todo.completed ? s.itemUnactive : s.item}
            >
              <label>
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="status"
                  onClick={this.changeCheckbox(todo._id)}
                  defaultChecked={todo.completed}
                />
                <span
                  className={
                    todo.completed ? s.checkboxChecked : s.checkboxIcon
                  }
                ></span>
              </label>
              {todo.todo}
              {renderInputUpdate && todoId === todo._id && (
                <input
                  className={s.update}
                  type="text"
                  autoFocus={true}
                  defaultValue={todo.todo}
                  onBlur={this.onUpdate(todo._id)}
                  onKeyDown={this.onKeyDown(todo._id)}
                />
              )}
              <button
                className={s.btnDel}
                title="Delete"
                onClick={this.onDelete(todo._id)}
              ></button>
              <button
                className={s.btnCopyText}
                title="Copy to clipboard"
                onClick={this.onCopyText(todo._id)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ todos: todosSelectors.getTodos(state) })

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// })

const { fetchTodos, deleteTodo, selectTodo, updateTodo } = todosOperations
const mapDispatchToProps = {
  fetchTodos,
  deleteTodo,
  selectTodo,
  updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
