import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todosReducer from './todos/todos-reducer'
import usersReducer from './users/users-reducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
