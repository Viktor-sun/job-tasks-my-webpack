import React, { Component } from 'react'

class TodosPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">todos</h1>
        <h2 className="titleHello">Hello undefined</h2>
        <button className="btnLogout"></button>
        <div className="formContainer">
          <form className="form">
            <button type="button" className="btnSelectAll">
              ❯
            </button>
            <input
              type="text"
              id="input"
              autoComplete="off"
              placeholder="What needs to be done?"
              autoFocus={true}
              className="input"
            />
          </form>
          <div className="todoContainer"></div>
          <footer className="footer">
            <span className="todoCounter">0 item left</span>
            <ul className="sortButtonList">
              <li>
                <button type="button" id="buttonAll" className="sortButton">
                  All
                </button>
              </li>
              <li>
                <button type="button" id="butttonActive" className="sortButton">
                  Active
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="buttonCompleted"
                  className="sortButton"
                >
                  Completed
                </button>
              </li>
            </ul>
            <button className="btnClear">Clear completed</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default TodosPage
