import React, { Component } from 'react'
import Layout from '../components/Layout'
import Form from '../components/FormTodos'
import TodosList from '../components/TodosList'
import TodosFooter from '../components/TodosFooter/TodosFooter'

class TodosPage extends Component {
  render() {
    return (
      <Layout withNav withTitle titleText="todos">
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
          <Form />
          <TodosList />
          <TodosFooter />
        </div>
      </Layout>
    )
  }
}

export default TodosPage
