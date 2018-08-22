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

export const query = (path, options = {}) => {
  const opts = {
    ...options,
    headers: {
      ...REQ_HEADERS,
      ...options.headers,
    },
  }
  return fetch(getApiUrl(path), opts)
    .then(processStatus)
    .then(parseJSON)
}

export default query
