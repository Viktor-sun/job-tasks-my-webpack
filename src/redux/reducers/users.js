import { combineReducers } from 'redux'
import { createReducer } from '@utils/redux-tools'
import { actionsUsers } from '../actions'

const userReducer = createReducer(null, {
  [actionsUsers.logup.Success]: (state, { payload }) => payload,
  [actionsUsers.login.Success]: (state, { payload }) => payload,
  [actionsUsers.logout.Success]: (state, { payload }) => payload,
  [actionsUsers.current.Success]: (state, { payload }) => payload,
})

const errorReducer = createReducer(null, {
  [actionsUsers.logup.Error]: (_, { payload }) => payload,
  [actionsUsers.login.Error]: (_, { payload }) => payload,
  [actionsUsers.logout.Error]: (_, { payload }) => payload,
  [actionsUsers.current.Error]: (_, { payload }) => payload,

  [actionsUsers.logup.Success]: () => null,
  [actionsUsers.login.Success]: () => null,
  [actionsUsers.logout.Success]: () => null,
  [actionsUsers.current.Success]: () => null,
})

const loadingReducer = createReducer(false, {
  [actionsUsers.logup.Request]: () => true,
  [actionsUsers.logup.Success]: () => false,
  [actionsUsers.logup.Error]: () => false,
  [actionsUsers.login.Request]: () => true,
  [actionsUsers.login.Success]: () => false,
  [actionsUsers.login.Error]: () => false,
  [actionsUsers.logout.Request]: () => true,
  [actionsUsers.logout.Success]: () => false,
  [actionsUsers.logout.Error]: () => false,
  [actionsUsers.current.Request]: () => true,
  [actionsUsers.current.Success]: () => false,
  [actionsUsers.current.Error]: () => false,
})

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer,
})
