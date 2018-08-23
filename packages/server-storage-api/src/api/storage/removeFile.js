import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

export default async function removeFile(req, res) {
  const key = getApiKey(req)
  const { filename } = req.body
  const removedItem = await storageController.removeFile(key, filename)
  res.status(200).json(removedItem)
}
