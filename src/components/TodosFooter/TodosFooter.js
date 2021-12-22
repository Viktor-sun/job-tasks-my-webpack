import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './TodosFooter.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'

class TodosFooter extends Component {
  handleClear = () => {
    this.props.clear()
  }

  hasCompletedTodo() {
    const { todos } = this.props
    return todos.some(todo => todo.completed)
  }

  getActiveElements() {
    const { todos } = this.props
    return todos.filter(({ completed }) => !completed).length
  }

  render() {
    const hasCompletedTodo = this.hasCompletedTodo()
    const activeElements = this.getActiveElements()

    return (
      <footer className={s.footer}>
        <span className={s.counter}>
          {activeElements} item left{activeElements > 1 ? 's' : ''}
        </span>
        <ul className={s.btnList}>
          <li>
            <button type="button" id="buttonAll" className={s.sortBtn}>
              All
            </button>
          </li>
          <li>
            <button type="button" id="butttonActive" className={s.sortBtn}>
              Active
            </button>
          </li>
          <li>
            <button type="button" id="buttonCompleted" className={s.sortBtn}>
              Completed
            </button>
          </li>
        </ul>
        {hasCompletedTodo && (
          <button className={s.btnClear} onClick={this.handleClear}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}

const mapStateToProps = state => ({ todos: todosSelectors.getTodos(state) })

const mapDispatchToProps = {
  clear: todosOperations.clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosFooter)
