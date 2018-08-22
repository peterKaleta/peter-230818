import { get } from 'lodash'

export const getApiKey = req => get(req, 'headers.api-key', false)
