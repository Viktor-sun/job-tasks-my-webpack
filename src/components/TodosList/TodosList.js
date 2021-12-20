import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './TodosList.module.css'
import todosOperations from '../../redux/todos/todos-operations'
import todosSelectors from '../../redux/todos/todos-selectors'

export class TodosList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  changeCheckbox = id => e => {
    console.log(id, e.target.checked)
  }

  onDelete = id => () => {
    this.props.deleteTodo(id)
  }

  render() {
    const { todos } = this.props
    return (
      <div className="todoContainer">
        <ul className={s.list}>
          {todos.map(todo => (
            <li key={todo._id} className={s.item}>
              <label>
                <input
                  className={s.checkbox}
                  type="checkbox"
                  name="status"
                  onClick={this.changeCheckbox(todo._id)}
                />
                <span
                  className={
                    todo.completed ? s.checkboxChecked : s.checkboxIcon
                  }
                ></span>
              </label>
              {todo.todo}
              {/* <input
                  className="updateTodoInput isHidden"
                  data-index="61bb3fd893d14b3a6724eddd"
                  type="text"
                /> */}
              <button
                className={s.btnDel}
                title="Delete"
                onClick={this.onDelete(todo._id)}
              ></button>
              {/* <button
                className={s.btnCopyText}
                title="Copy to clipboard"
              ></button> */}
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

const mapDispatchToProps = {
  fetchTodos: todosOperations.fetchTodos,
  deleteTodo: todosOperations.deleteTodo,
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
