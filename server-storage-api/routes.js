import { AsyncRouter } from 'express-async-router'
import api from './api'

const apiRouter = new AsyncRouter()

apiRouter.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }))
apiRouter.get('/insertFile', api.insertFile)
apiRouter.get('/list', api.listStorage)

export default apiRouter
