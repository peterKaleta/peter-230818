import qs from 'qs'
import { ToastStore } from 'react-toasts'

import queryApi from '../utils/apiClient'

export const STORAGE_FETCH_INIT = 'STORAGE_FETCH_INIT'
export const STORAGE_FETCH_SUCCESS = 'STORAGE_FETCH_SUCCESS'
export const fetchStorageList = query => async (dispatch) => {
  dispatch({
    type: STORAGE_FETCH_INIT,
  })
  const queryString = qs.stringify({ q: query })
  let result
  try {
    result = await queryApi(`/storage?${queryString}`)
  } catch (e) {
    ToastStore.error('Problem with loading the translation list')
    return
  }

  dispatch({
    type: STORAGE_FETCH_SUCCESS,
    payload: {
      items: result.items,
    },
  })
}

export const STORAGE_DELETE_ITEM_INIT = 'STORAGE_DELETE_ITEM_INIT'
export const STORAGE_DELETE_ITEM_SUCCESS = 'STORAGE_DELETE_ITEM_SUCCESS'
export const removeStorageItem = item => async (dispatch) => {
  dispatch({
    type: STORAGE_DELETE_ITEM_INIT,
  })
  const result = await queryApi('/storage/files', {
    method: 'DELETE',
    body: { filename: item.filename },
  })
  dispatch({
    type: STORAGE_DELETE_ITEM_SUCCESS,
    payload: result,
  })
}

export const STORAGE_UPLOAD_ITEM_INIT = 'STORAGE_UPLOAD_ITEM_INIT'
export const STORAGE_UPLOAD_ITEM_SUCCESS = 'STORAGE_UPLOAD_ITEM_SUCCESS'
export const uploadStorageItem = files => async (dispatch) => {
  dispatch({
    type: STORAGE_UPLOAD_ITEM_INIT,
  })
  const data = new FormData()
  files.forEach(file => data.append(file.name, file))
  const result = await queryApi('/storage/files', {
    method: 'POST',
    forceMultipart: true,
    body: data,
  })
  dispatch({
    type: STORAGE_UPLOAD_ITEM_SUCCESS,
    payload: result,
  })
}

export const STORAGE_UPDATE_ITEM_INIT = 'STORAGE_UPDATE_ITEM_INIT'
export const STORAGE_UPDATE_ITEM_SUCCESS = 'STORAGE_UPDATE_ITEM_SUCCESS'
export const updateStorageItem = (item, newFilename) => async (dispatch) => {
  dispatch({
    type: STORAGE_UPDATE_ITEM_INIT,
  })
  let result
  try {
    result = await queryApi('/storage/files', {
      method: 'PUT',
      body: {
        filename: item.filename,
        newFilename,
      },
    })
  } catch (e) {
    ToastStore.error('Couldn\'t update the item')
    return
  }

  dispatch({
    type: STORAGE_UPDATE_ITEM_SUCCESS,
    payload: {
      updatedItem: result,
      oldId: item.id,
    },
  })
  ToastStore.success('Item updated!')
}
