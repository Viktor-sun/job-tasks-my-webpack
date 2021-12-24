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

const loadingReducer = createReducer(false, {
  [actionsUsers.logup.Request]: () => true,
  [actionsUsers.logup.Success]: () => false,
  [actionsUsers.logup.Error]: () => false,
  [actionsUsers.login.Request]: () => true,
  [actionsUsers.login.Success]: () => false,
  [actionsUsers.login.Error]: () => false,
})

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer,
})
