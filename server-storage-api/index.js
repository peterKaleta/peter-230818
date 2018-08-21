import app from './app'
import config from './config'
import logger from './utils/loggers'

app.listen(config.PORT, () => logger.info(`server started on PORT ${config.PORT}`))
