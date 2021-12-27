import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'

const preloadedState = {
  todos: {},
  user: {
    user: { _id: localStorage.getItem('userId') || null },
  },
}

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk)),
)

store.subscribe(() => {
  const userId = store.getState().user.user._id
  if (userId) {
    localStorage.setItem('userId', userId)
  }
})

export default store
