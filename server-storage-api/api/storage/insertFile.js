import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

const insertFile = async (req, res) => {
  const key = getApiKey(req)
  const data = await storageController.insertFile(req, res, key)
  const [{ fieldname: filename, mimetype }] = data.files
  res.status(200).json({ filename, mimetype })
}

export default insertFile
