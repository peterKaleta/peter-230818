import qs from 'qs'
import { toast } from 'react-toastify'
import queryApi from '../utils/apiClient'

export const STORAGE_FETCH_INIT = 'STORAGE_FETCH_INIT'
export const STORAGE_FETCH_SUCCESS = 'STORAGE_FETCH_SUCCESS'
export const fetchStorageList = query => async (dispatch) => {
  dispatch({
    type: STORAGE_FETCH_INIT,
  })
  const queryString = qs.stringify({ q: query })
  const result = await queryApi(`/storage?${queryString}`)
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
export const updateStorageItem = (filename, newFilename) => async (dispatch) => {
  dispatch({
    type: STORAGE_UPDATE_ITEM_INIT,
  })
  const result = await queryApi('/storage/files', {
    method: 'PUT',
    body: {
      filename,
      newFilename,
    },
  })
  dispatch({
    type: STORAGE_UPDATE_ITEM_SUCCESS,
    payload: {
      ...result,
      oldFilename: filename,
    },
  })
  toast.success('Item Updated!', {
    position: toast.POSITION.BOTTOM_CENTER,
  })
}
