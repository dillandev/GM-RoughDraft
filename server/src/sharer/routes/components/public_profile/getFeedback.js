import express from 'express';
import { getPublicSharerFeedback } from '../../../controllers/components/public_profile/getFeedback.js'; 
import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

// GET /api/public/sharer/:sharerId/feedback
router.get('/:sharerId/feedback', verifyToken, getPublicSharerFeedback);

export default router;