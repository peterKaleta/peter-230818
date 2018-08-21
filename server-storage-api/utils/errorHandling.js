import { GENERAL_REQ_ERROR } from '../consts/errors'
import config from '../config'

export default function handleErrors(err, req, res, next) { // eslint-disable-line no-unused-vars
  const { message = GENERAL_REQ_ERROR } = err
  res.status(err.status || 500)
    .json({
      message,
      err: config.isProduction ? {} : err,
    })
}
