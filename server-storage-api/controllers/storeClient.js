import fs from 'fs-extra'
import util from 'util'

import multer from 'multer'
import config from '../config'

const getDir = key => `${config.STORE_DIR}/${key}/`
const getFilePath = (key, filename) => `${config.STORE_DIR}/${key}/${filename}`

export const create = key => fs.ensureDir(getDir(key))
export const list = key => fs.readdir(getDir(key))

export const removeFile = async (key, filename) => {
  await fs.remove(getFilePath(key, filename))
  return { filename }
}

export const renameFile = async (key, oldName, newName) => {
  await fs.move(getFilePath(key, oldName), getFilePath(key, newName))
  return { filename: newName }
}

export const insertFile = async (req, res, key) => {
  const multerStorage = multer.diskStorage({
    destination: (r, file, cb) => { cb(null, getDir(key)) },
    filename: (r, file, cb) => { cb(null, file.fieldname) },
  })
  const uploader = util.promisify(multer({ storage: multerStorage }).any())
  await uploader(req, res)
  return { files: req.files }
}
