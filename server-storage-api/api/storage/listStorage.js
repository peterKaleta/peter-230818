import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

export default async function listStorage(req, res) {
  const key = getApiKey(req)
  const items = await storageController.listStore(key)
  res.status(200).json({ items })
}
