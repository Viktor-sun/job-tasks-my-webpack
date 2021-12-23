import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './TodosFooter.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'
import { actionsTodos } from '@redux/actions'

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
    const { filter } = this.props
    const hasCompletedTodo = this.hasCompletedTodo()
    const activeElements = this.getActiveElements()

    return (
      <footer className={s.footer}>
        <span className={s.counter}>
          {activeElements} item left{activeElements > 1 ? 's' : ''}
        </span>
        <ul className={s.btnList}>
          <li>
            <button
              type="button"
              onClick={() => {
                this.props.changeFilter('all')
              }}
              className={filter === 'all' ? s.activeSortBtn : s.sortBtn}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                this.props.changeFilter('active')
              }}
              className={filter === 'active' ? s.activeSortBtn : s.sortBtn}
            >
              Active
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                this.props.changeFilter('completed')
              }}
              className={filter === 'completed' ? s.activeSortBtn : s.sortBtn}
            >
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

const mapStateToProps = state => ({
  todos: todosSelectors.getTodos(state),
  filter: todosSelectors.getFilter(state),
})

const mapDispatchToProps = {
  clear: todosOperations.clearCompleted,
  changeFilter: actionsTodos.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosFooter)
