import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

export default async function renameFile(req, res) {
  const key = getApiKey(req)
  const { filename: oldFilename, newFilename } = req.body
  const udpatedFile = await storageController.renameFile(key, oldFilename, newFilename)
  res.status(200).json({ ...udpatedFile })
}
