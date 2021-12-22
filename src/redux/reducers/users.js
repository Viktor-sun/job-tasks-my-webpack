import { combineReducers } from 'redux'
import { createReducer } from '@utils/redux-tools'
import { actionsUsers } from '../actions'

const userReducer = createReducer(
  {},
  {
    [actionsUsers.logup.Success]: (state, { payload }) => payload,
  },
)

// const errorReducer = createReducer()

export default combineReducers({ user: userReducer })
