import { Router } from 'express'
import api from './api'

const apiRouter = new Router()

apiRouter.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }))
apiRouter.get('/insertFile', api.insertFile)

export default apiRouter
