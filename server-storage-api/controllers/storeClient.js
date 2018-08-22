import fs from 'fs-extra'
import { lookup } from 'mime-types'
import util from 'util'

import multer from 'multer'
import config from '../config'

const getDir = key => `${config.STORE_DIR}/${key}/`
const getFilePath = (key, filename) => `${config.STORE_DIR}/${key}/${filename}`
const mapFileNameToType = filename => ({ filename, mimetype: lookup(filename) })

export const create = key => fs.ensureDir(getDir(key))
export const list = key => fs.readdir(getDir(key)).then(items => items.map(mapFileNameToType))
export const removeFile = (key, fileName) => fs.remove(getFilePath(key, fileName))
export const renameFile = (key, oldName, newName) =>
  fs.move(getFilePath(key, oldName), getFilePath(key, newName))


export const insertFile = async (req, res, key) => {
  const multerStorage = multer.diskStorage({
    destination: (r, file, cb) => { cb(null, getDir(key)) },
    filename: (r, file, cb) => { cb(null, file.fieldname) },
  })
  const uploader = util.promisify(multer({ storage: multerStorage }).any())
  await uploader(req, res)
  return { files: req.files }
}
