import * as storageController from '../../controllers/storage'

const insertFile = async (req, res) => {
  const path = 'costam22233'
  await storageController.createStore(path)
  await storageController.insertFile(path, 'costam.txt', 'laksjdlakjdlkja')
  res.status(200).json({ msg: 'success' })
}

export default insertFile
