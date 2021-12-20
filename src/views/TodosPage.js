import React, { Component } from 'react'
import Title from '../components/Title'
import Form from '../components/FormTodos'
import TodosList from '../components/TodosList'
import Footer from '../components/Footer/Footer'

class TodosPage extends Component {
  render() {
    return (
      <>
        <Title text="todos" />
        <h2 className="titleHello">Hello undefined</h2>
        <button className="btnLogout">logout</button>
        <div
          className="formContainer"
          style={{
            backgroundColor: '#fefefe',
            boxShadow: '1px 23px 28px -3px rgba(114, 114, 114, 0.2)',
            border: 'solid 2px #dbdbdb',
            borderTop: 'none',
          }}
        >
          <Form />
          <TodosList />

          <Footer />
        </div>
      </>
    )
  }
}

export default TodosPage
