import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './TodosFooter.module.css'
import { todosOperations } from '@redux/thunks'
import { todosSelectors } from '@redux/selectors'
import { actionsTodos } from '@redux/actions'

const SORT_BTN = [
  { name: 'All', filter: 'all' },
  { name: 'Active', filter: 'active' },
  { name: 'Completed', filter: 'completed' },
]

class TodosFooter extends Component {
  handleClear = () => {
    this.props.clear()
  }

  render() {
    const { filter, todosAtive, todosCompleted } = this.props

    return (
      <footer className={s.footer}>
        <span className={s.counter}>
          {todosAtive.length} item left{todosAtive.length ? '' : 's'}
        </span>
        <ul className={s.btnList}>
          {SORT_BTN.map(btn => (
            <li key={btn.name}>
              <button
                type="button"
                onClick={() => {
                  this.props.changeFilter(btn.filter)
                }}
                className={filter === btn.filter ? s.activeSortBtn : s.sortBtn}
              >
                {btn.name}
              </button>
            </li>
          ))}
        </ul>
        {Boolean(todosCompleted.length) && (
          <button className={s.btnClear} onClick={this.handleClear}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  todosAtive: todosSelectors.getActiveTodos(state),
  todosCompleted: todosSelectors.getCompletedTodos(state),
  filter: todosSelectors.getFilter(state),
})

const mapDispatchToProps = {
  clear: todosOperations.clearCompleted,
  changeFilter: actionsTodos.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosFooter)
