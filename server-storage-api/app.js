import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
import { errorLogger, requestLogger } from './utils/loggers'
import errorHandler from './utils/errorHandling'
import apiRouter from './routes'
import { apiKeyCheck } from './middlewares'

const app = express()
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(requestLogger)
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(apiKeyCheck)
app.use('/api', apiRouter)
app.use(errorLogger)
app.use(errorHandler)

export default app
