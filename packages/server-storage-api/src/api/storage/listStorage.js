import { startsWith, get } from 'lodash'
import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

export default async function listStorage(req, res) {
  const key = getApiKey(req)
  const result = await storageController.listStore(key)
  const qs = get(req, 'query.q', '')
  const items = qs ? result.filter(i => startsWith(i.filename, qs)) : result
  res.status(200).json({ items })
}
