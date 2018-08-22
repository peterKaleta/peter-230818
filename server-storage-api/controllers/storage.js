import * as storeClient from './storeClient'

export const createStore = key => storeClient.create(key)
export const listStore = key => storeClient.list(key)
export const insertFile = (req, res, next, key) =>
  storeClient.insertFile(req, res, next, key)
export const renameFile = (key, oldName, newName) => storeClient.renameFile(oldName, newName)
export const removeFile = (key, filename) => storeClient.removeFile(key, filename)
