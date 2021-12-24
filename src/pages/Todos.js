import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import TodosForm from '../components/FormTodos'
import TodosList from '../components/TodosList'
import TodosFooter from '../components/TodosFooter/TodosFooter'
import { todosSelectors } from '@redux/selectors'

class TodosPage extends Component {
  render() {
    const { todos, loading } = this.props

    return (
      <Layout withTitle titleText="todos" withSpinner={loading}>
        <h2 className="titleHello">Hello undefined</h2>
        <button className="btnLogout">logout</button>
        <div
          style={{
            backgroundColor: '#fefefe',
            boxShadow: '1px 23px 28px -3px rgba(114, 114, 114, 0.2)',
            border: 'solid 2px #dbdbdb',
            borderTop: 'none',
          }}
        >
          <TodosForm />
          <TodosList />
          {Boolean(todos.length) && <TodosFooter />}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  todos: todosSelectors.getTodos(state),
  loading: todosSelectors.getLoading(state),
})

export default connect(mapStateToProps)(TodosPage)
