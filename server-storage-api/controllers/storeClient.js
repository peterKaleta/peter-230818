import fs from 'fs-extra'
import { lookup } from 'mime-types'

import config from '../config'

const getDir = key => `${config.STORE_DIR}/${key}/`
const getFilePath = (key, filename) => `${config.STORE_DIR}/${key}/${filename}`
const mapFileNameToType = filename => ({ filename, type: lookup(filename) })

export const create = key => fs.ensureDir(getDir(key))
export const list = key => fs.readdir(getDir(key)).then(items => items.map(mapFileNameToType))
export const insertFile = (key, fileName, body) => fs.writeFile(getFilePath(key, fileName), body)
export const removeFile = (key, fileName) => fs.remove(getFilePath(key, fileName))
export const renameFile = (key, oldName, newName) =>
  fs.move(getFilePath(key, oldName), getFilePath(key, newName))
