import * as storageController from '../../controllers/storage'

const insertFile = async (req, res) => {
  await storageController.createStore(req.body.path)
  await storageController.insertFile(req.body.path, 'costam.txt', 'laksjdlakjdlkja')
  res.status(200).json({ msg: 'success' })
}

export default insertFile
