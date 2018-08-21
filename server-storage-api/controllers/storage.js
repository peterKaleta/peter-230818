import * as storeClient from './storeClient'

export const createStore = key => storeClient.create(key)
export const listStore = key => storeClient.list(key)
export const insertFile = (key, fileName, body) => storeClient.insertFile(key, fileName, body)
export const renameFile = (key, oldName, newName) => storeClient.renameFile(oldName, newName)
export const removeFile = (key, fileName) => storeClient.removeFile(key, fileName)
