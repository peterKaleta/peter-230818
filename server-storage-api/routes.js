import { AsyncRouter } from 'express-async-router'

import api from './api'

const apiRouter = new AsyncRouter()

apiRouter.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }))
apiRouter.get('/storage', api.listStorage)
apiRouter.delete('/storage/files', api.removeFile)
apiRouter.post('/storage/files', api.insertFile)

export default apiRouter
