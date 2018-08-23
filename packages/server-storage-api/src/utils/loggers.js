import winston from 'winston'
import winstonExpress from 'express-winston'
import morgan from 'morgan'
import config from '../config'

const { createLogger, format, transports } = winston
const { printf } = format

export const requestLogger = morgan('dev')

export const errorLogger = winstonExpress.errorLogger({
  transports: [
    new transports.Console(config.DEFAULT_WINSTON_OPTIONS),
  ],
})

export default createLogger({
  format: printf(info => `${info.level}: ${info.message}`),
  transports: [
    new transports.Console(transports.Console),
  ],
})
