import { getApiKey } from './utils/apiHandlers'
import { APIKEY_NOT_AUTHORISED, APIKEY_MISSING } from './consts/errors'
import config from './config'

export function apiKeyCheck(req, res, next) {
  const apiKey = getApiKey(req)
  if (!apiKey) {
    next(new Error(APIKEY_MISSING))
  } else if (!config.API_KEYS.includes(apiKey)) {
    next(new Error(APIKEY_NOT_AUTHORISED))
  } else {
    next()
  }
}
