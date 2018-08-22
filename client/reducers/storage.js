import { fromJS, List } from 'immutable'
import { STORAGE_FETCH_INIT, STORAGE_FETCH_SUCCESS } from '../actions/storage'

const initialState = fromJS({
  loading: true,
  files: new List(),
})

export default function Storage(state = initialState, action) {
  switch (action.type) {
    case STORAGE_FETCH_INIT:
      return state.set('loading', true)
    case STORAGE_FETCH_SUCCESS:
      return state.set('files', new List(action.payload.items))
    default:
      return state
  }
}
