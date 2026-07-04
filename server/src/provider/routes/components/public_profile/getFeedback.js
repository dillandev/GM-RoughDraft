import express from 'express';
import { getPublicProviderFeedback } from '../../../controllers/components/public_profile/getFeedback.js';
import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

// GET /api/public/provider/:providerId/feedback
router.get('/:providerId/feedback', verifyToken, getPublicProviderFeedback);

export default router;