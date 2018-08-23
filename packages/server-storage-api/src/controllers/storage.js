import crypto from 'crypto'
import { lookup } from 'mime-types'

import * as storeClient from './storeClient'

const callculateId = (key, filename) => crypto.createHash('md5').update(key + filename).digest('hex')

const parseStorageItem = (key, filename) => ({
  id: callculateId(key, filename),
  filename,
  mimetype: lookup(filename),
})

export const createStore = key => storeClient.create(key)

export const listStore = async (key) => {
  const data = await storeClient.list(key)
  return data.map(filename => parseStorageItem(key, filename))
}

export const insertFile = async (req, res, key) => {
  const data = await storeClient.insertFile(req, res, key)
  const { filename } = data
  return parseStorageItem(key, filename)
}

export const removeFile = async (key, filename) => {
  const data = await storeClient.removeFile(key, filename)
  return parseStorageItem(key, data.filename)
}

export const renameFile = async (key, oldName, newName) => {
  const data = await storeClient.renameFile(key, oldName, newName)
  return parseStorageItem(key, data.filename)
}
