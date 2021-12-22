import { actionsUsers } from '../actions'
// import { callApi } from '../../helpers/callApi'

const logup = () => dispatch => {
  dispatch(actionsUsers.logup.Request())

  //   callApi('/api/user')
  //   .then(data => dispatch(actionsUsers.logup.Success(data.data.todos)))
  //   .catch(e => dispatch(actionsUsers.logup.Error(e.message)))
}

export default { logup }
