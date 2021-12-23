import { combineReducers } from 'redux'
import { createReducer } from '@utils/redux-tools'
import { actionsUsers } from '../actions'

const userReducer = createReducer(
  {},
  {
    [actionsUsers.logup.Success]: (state, { payload }) => payload,
    [actionsUsers.login.Success]: (state, { payload }) => payload,
  },
)

const errorReducer = createReducer(null, {
  [actionsUsers.logup.Error]: (_, { payload }) => payload,
  [actionsUsers.login.Error]: (_, { payload }) => payload,

  [actionsUsers.logup.Success]: () => null,
  [actionsUsers.login.Success]: () => null,
})

export default combineReducers({ user: userReducer, error: errorReducer })
