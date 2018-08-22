import queryApi from '../utils/apiClient'

export const STORAGE_FETCH_INIT = 'STORAGE_FETCH_INIT'
export const STORAGE_FETCH_SUCCESS = 'STORAGE_FETCH_SUCCESS'

export const fetchStorageList = () => async (dispatch) => {
  const items = await queryApi('/list')
  dispatch({
    type: STORAGE_FETCH_INIT,
  })
  dispatch({
    type: STORAGE_FETCH_SUCCESS,
    payload: {
      items,
    },
  })
}
