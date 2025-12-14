import express from 'express';
import {getCurrentUser, login, logout, register} from '../controller/auth.controller.js'
import { authenticateUser } from '../middleware/auth.middleware.js';
const router = express.Router();


router.post('/register',register);
router.post('/login',login)
router.post('/logout',logout);
router.get('/current-user',authenticateUser,getCurrentUser);

export default router;