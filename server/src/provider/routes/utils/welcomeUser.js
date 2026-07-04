import express from 'express';
import { welcomeUser } from '../../controllers/utils/welcomeUser.js';
import { verifyToken } from '../../../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, welcomeUser);

export default router;