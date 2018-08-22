import { isObject } from 'lodash'
import config from './config'

const SUCCESS_STATUS_CODES = [0, 200, 201]
const REQ_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'api-key': config.API_KEY,
}

const getApiUrl = path => `${config.API_URL}${path}`
export const parseJSON = response => response.json ? response.json() : response
export const processStatus = response =>
  SUCCESS_STATUS_CODES.includes(response.status)
    ? Promise.resolve(response)
    : Promise.reject(response)
export const processBody = (body = {}) => isObject(body) ? JSON.stringify(body) : body

export const query = (path, options = {}) => {
  const opts = {
    ...options,
    headers: {
      ...REQ_HEADERS,
      ...options.headers,
    },
  }
  if (options.body) {
    opts.body = processBody(options.body)
  }
  return fetch(getApiUrl(path), opts)
    .then(processStatus)
    .then(parseJSON)
}

export default query
