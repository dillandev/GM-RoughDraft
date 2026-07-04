import express from 'express';
import { getUserCredits } from '../../controllers/utils/getCredits.js';
import { verifyToken } from '../../../middleware/auth.js'

const router = express.Router();

// GET /credits/:userId
router.get('/:userId', verifyToken, getUserCredits);

export default router;