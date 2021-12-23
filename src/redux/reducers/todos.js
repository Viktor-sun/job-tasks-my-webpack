import { combineReducers } from 'redux'
import { createReducer } from '@utils/redux-tools'
import { actionsTodos } from '../actions'

const todosReducer = createReducer([], {
  [actionsTodos.fetchTodo.Success]: (_, { payload }) => payload,
  [actionsTodos.addTodo.Success]: (state, { payload }) => [...state, payload],
  [actionsTodos.deleteTodo.Success]: (state, { payload }) =>
    state.filter(todo => todo._id !== payload),
  [actionsTodos.selectTodo.Success]: (state, { payload }) => {
    const index = state.findIndex(todo => todo._id === payload._id)
    const nextState = [...state]
    nextState[index].completed = payload.completed
    return nextState
  },
  [actionsTodos.updateTodo.Success]: (state, { payload }) => {
    const idx = state.findIndex(todo => todo._id === payload._id)
    const newState = [...state]
    newState[idx].todo = payload.todo
    return newState
  },
  [actionsTodos.selectAllTodo.Success]: state => {
    return state.reduce((acc, todo) => {
      todo.completed = true
      acc.push(todo)
      return acc
    }, [])
  },
  [actionsTodos.unselectAllTodo.Success]: state => {
    return state.reduce((acc, todo) => {
      todo.completed = false
      acc.push(todo)
      return acc
    }, [])
  },
  [actionsTodos.clearCompleted.Success]: state =>
    state.filter(todo => !todo.completed),
})

const errorReducer = createReducer(null, {
  [actionsTodos.fetchTodo.Error]: (_, { payload }) => payload,
  [actionsTodos.addTodo.Error]: (_, { payload }) => payload,
  [actionsTodos.deleteTodo.Error]: (_, { payload }) => payload,
  [actionsTodos.selectTodo.Error]: (_, { payload }) => payload,
  [actionsTodos.selectAllTodo.Error]: (_, { payload }) => payload,
  [actionsTodos.unselectAllTodo.Error]: (_, { payload }) => payload,

  [actionsTodos.fetchTodo.Success]: () => null,
  [actionsTodos.addTodo.Success]: () => null,
  [actionsTodos.deleteTodo.Success]: () => null,
  [actionsTodos.selectTodo.Success]: () => null,
  [actionsTodos.selectAllTodo.Success]: () => null,
  [actionsTodos.unselectAllTodo.Success]: () => null,
})

const changeFilter = createReducer('all', {
  [actionsTodos.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  todos: todosReducer,
  error: errorReducer,
  filter: changeFilter,
})
