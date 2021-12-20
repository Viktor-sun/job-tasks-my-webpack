import actions from './users-actions'

const logup = () => dispatch => {
  dispatch(actions.logupRequest())
}

export default { logup }
