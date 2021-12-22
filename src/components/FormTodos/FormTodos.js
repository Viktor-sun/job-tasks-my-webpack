import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './FormTodos.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'

class FormTodos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  handleSelectAll = isAllCompleted => () => {
    if (isAllCompleted) {
      this.props.unselectAll()
      return
    }
    this.props.selectAll()
  }

  isAllCompleted() {
    return this.props.todos.every(({ completed }) => completed)
  }

  render() {
    const { inputValue } = this.state
    const { todos } = this.props
    const isAllCompleted = this.isAllCompleted()
    const isActive = isAllCompleted ? s.btnActive : s.btn
    const hide = todos.length === 0 && s.hideBtn

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <button
          type="button"
          className={hide || isActive}
          onClick={this.handleSelectAll(isAllCompleted)}
        >
          ❯
        </button>
        <input
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          autoFocus={true}
          className={s.input}
          onChange={this.handleChange}
          value={inputValue}
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({ todos: todosSelectors.getTodos(state) })

const mapDispatchToProps = {
  addTodo: todosOperations.addTodo,
  selectAll: todosOperations.selectAllTodo,
  unselectAll: todosOperations.unselectAllTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTodos)
