import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './FormTodos.module.css'
import todosOperations from '../../redux/todos/todos-operations'

class FormTodos extends Component {
  constructor() {
    super()
    this.state = { inputValue: '' }
  }

  changeInput = e => {
    this.setState({ inputValue: e.target.value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  render() {
    const { inputValue } = this.state

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <button type="button" className={s.btn}>
          ❯
        </button>
        <input
          type="text"
          autoComplete="off"
          placeholder="What needs to be done?"
          autoFocus={true}
          className={s.input}
          onChange={this.changeInput}
          value={inputValue}
        />
      </form>
    )
  }
}

const mapDispatchToProps = {
  addTodo: todosOperations.addTodo,
}

export default connect(null, mapDispatchToProps)(FormTodos)
