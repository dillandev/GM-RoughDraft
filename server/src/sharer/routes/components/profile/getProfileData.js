import express from 'express';
import { getSharerProfileData } from '../../../controllers/components/profile/getProfileData.js'
import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

// Middleware to check user role from JWT
const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

// --- All sharer routes require authentication and 'sharer' role ---
router.use(verifyToken, authorizeRole('sharer'));

router.get("/", getSharerProfileData);

export default router;