import express from 'express'
import { log } from '../middlewares/log.js'
import { logs2 } from '../middlewares/log2.js'
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', log, logs2, getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
