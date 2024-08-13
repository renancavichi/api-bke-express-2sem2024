import express from 'express'
import createController from '../controllers/account/createController.js'
import getByIdController from '../controllers/account/getByIdController.js'
import listController from '../controllers/account/listController.js'
import updateController from '../controllers/account/updateController.js'
import removeController from '../controllers/account/removeController.js'

const router = express.Router()

router.post('/', createController)
router.get('/list', listController)
router.get('/:id', getByIdController)
router.put('/:id', updateController)
router.delete('/:id', removeController)

export default router