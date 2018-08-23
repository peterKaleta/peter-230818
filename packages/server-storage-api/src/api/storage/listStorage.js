import { startsWith, endsWith, get } from 'lodash'
import { getApiKey } from '../../utils/apiHandlers'
import * as storageController from '../../controllers/storage'

export default async function listStorage(req, res) {
  const key = getApiKey(req)
  await storageController.createStore(key)
  const result = await storageController.listStore(key)
  const nameQuery = get(req, 'query.q', '')
  const typeQuery = get(req, 'query.t', '')
  const items = result.filter(i =>
    startsWith(i.filename, nameQuery) && endsWith(i.filename, typeQuery))
  res.status(200).json({ items })
}
