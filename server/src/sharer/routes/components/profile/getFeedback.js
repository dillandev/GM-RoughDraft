import express from 'express';
import { getSharerFeedback } from '../../../controllers/components/profile/getFeedback.js'; 
import { verifyToken } from '../../../../middleware/auth.js';

const router = express.Router();

const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

// All provider routes require authentication and the 'sharer' role
router.use(verifyToken, authorizeRole('sharer'));

// GET /api/feedback
router.get('/', getSharerFeedback);

export default router;