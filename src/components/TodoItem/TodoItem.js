import React, { Component } from 'react'
import s from './TodoItem.module.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditMode: false,
      todoId: this.props.id,
      editTodo: this.props.todo,
    }
  }

  handleChange = e => {
    this.setState({ editTodo: e.target.value.trim() })
  }

  handleSwitchCheckbox = e => {
    this.props.onSelect(this.state.todoId, e.target.checked)
  }

  handleDelete = () => {
    this.props.onDelete(this.state.todoId)
  }

  handleCopyText = e => {
    navigator.clipboard
      .writeText(this.props.todo)
      .then(() => console.log('copied', e))
  }

  handleSetEditMode = () => {
    this.setState({ isEditMode: true })
  }

  handleUpdate = () => {
    this.update()
  }

  handleKey = e => {
    if (e.code === 'Enter') {
      this.update()
    }
  }

  update() {
    const { todoId, editTodo } = this.state
    const { todo } = this.props
    if (todo === editTodo) {
      return this.setState({ isEditMode: false })
    }
    this.props
      .onUpdate(todoId, editTodo)
      .then(() => this.setState({ isEditMode: false }))
  }

  render() {
    const { todo, completed } = this.props
    const { isEditMode, editTodo } = this.state
    const hideCheckbox = isEditMode && s.isHiddenCheckbox
    const showCheck = completed ? s.checkboxChecked : s.checkboxIcon

    return (
      <li
        onDoubleClick={this.handleSetEditMode}
        className={completed ? s.itemUnactive : s.item}
      >
        <label>
          <input
            className={s.checkbox}
            type="checkbox"
            name="checkbox"
            defaultChecked={completed}
            onClick={this.handleSwitchCheckbox}
          />
          <span className={hideCheckbox || showCheck}></span>
        </label>
        {todo}
        {isEditMode && (
          <input
            className={s.update}
            type="text"
            autoFocus={true}
            name="editTodo"
            value={editTodo}
            onChange={this.handleChange}
            onBlur={this.handleUpdate}
            onKeyDown={this.handleKey}
          />
        )}
        <button
          className={s.btnDel}
          title="Delete"
          onClick={this.handleDelete}
        ></button>
        <button
          className={s.btnCopyText}
          title="Copy to clipboard"
          onClick={this.handleCopyText}
        ></button>
      </li>
    )
  }
}

export default TodoItem
