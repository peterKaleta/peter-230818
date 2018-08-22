import queryApi from '../utils/apiClient'

export const STORAGE_FETCH_INIT = 'STORAGE_FETCH_INIT'
export const STORAGE_FETCH_SUCCESS = 'STORAGE_FETCH_SUCCESS'

export const fetchStorageList = () => async (dispatch) => {
  dispatch({
    type: STORAGE_FETCH_INIT,
  })
  const result = await queryApi('/storage')
  dispatch({
    type: STORAGE_FETCH_SUCCESS,
    payload: {
      items: result.items,
    },
  })
}

export const STORAGE_DELETE_ITEM_INIT = 'STORAGE_DELETE_ITEM_INIT'
export const STORAGE_DELETE_ITEM_SUCCESS = 'STORAGE_DELETE_ITEM_SUCCESS'

export const removeStorageItem = filename => async (dispatch) => {
  dispatch({
    type: STORAGE_DELETE_ITEM_INIT,
  })
  await queryApi('/storage/files', {
    method: 'DELETE',
    body: { filename },
  })
  dispatch({
    type: STORAGE_DELETE_ITEM_SUCCESS,
    payload: { filename },
  })
}
