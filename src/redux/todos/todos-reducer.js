import { combineReducers } from 'redux'
import actionsTodos from './todos-actions'

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

const todosReducer = createReducer([], {
  [actionsTodos.fetchTodosSuccess()]: (_, { payload }) => payload,
  [actionsTodos.addTodoSuccess()]: (state, { payload }) => [...state, payload],
  [actionsTodos.deleteTodoSuccess()]: (state, { payload }) =>
    state.filter(todo => todo._id !== payload),
  [actionsTodos.selectTodoSuccess()]: (state, { payload }) => {
    const index = state.findIndex(todo => todo._id === payload._id)
    const nextState = [...state]
    nextState[index].completed = payload.completed
    return nextState
  },

  // [actionsTypes.FETCH_TODOS_SUCCESS]: (_, { payload }) => payload,
  // [actionsTypes.ADD_TODO_SUCCESS]: (state, { payload }) => [...state, payload],
  // [actionsTypes.DELETE_TODO_SUCCESS]: (state, { payload }) =>
  //   state.filter(todo => todo._id !== payload),
})

const todosError = createReducer(null, {
  [actionsTodos.fetchTodosError()]: (_, { payload }) => payload,
  [actionsTodos.addTodoError()]: (_, { payload }) => payload,
  [actionsTodos.deleteTodoError()]: (_, { payload }) => payload,
  [actionsTodos.selectTodoError()]: (_, { payload }) => payload,

  [actionsTodos.fetchTodosSuccess()]: () => null,
  [actionsTodos.addTodoSuccess()]: () => null,
  [actionsTodos.deleteTodoSuccess()]: () => null,
  [actionsTodos.selectTodoSuccess()]: () => null,
})

// const todosReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.FETCH_TODOS_SUCCESS:
//       return payload
//     case actionsTypes.ADD_TODO_SUCCESS:
//       return [...state, payload]
//     case actionsTypes.DELETE_TODO_SUCCESS:
//       return state.filter(todo => todo._id !== payload)
//     default:
//       return state
//   }
// }

// const todosError = (state = null, { type, payload }) => {
//   switch (type) {
//     case actionsTypes.FETCH_TODOS_ERROR:
//       return payload
//     case actionsTypes.ADD_TODO_ERROR:
//       return payload
//     case actionsTypes.DELETE_TODO_ERROR:
//       return payload
//     case actionsTypes.FETCH_TODOS_SUCCESS:
//       return null
//     case actionsTypes.ADD_TODO_SUCCESS:
//       return null
//     case actionsTypes.DELETE_TODO_SUCCESS:
//       return null
//     default:
//       return state
//   }
// }

export default combineReducers({ todos: todosReducer, error: todosError })
