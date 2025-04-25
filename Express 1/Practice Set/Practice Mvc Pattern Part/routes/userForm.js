import express from 'express'
import { userGetController, userPostController } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.get('/userInfo', userGetController)
userRouter.post('/userInfo', userPostController)

export default userRouter;
