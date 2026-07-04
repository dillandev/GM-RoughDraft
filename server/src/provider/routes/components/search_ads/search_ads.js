import express from 'express';
import { searchAds, getSharerProfileByAd } from '../../../controllers/components/search_ads/search_ads.js';
import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

// Middleware to check user role from JWT
const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

// --- All provider routes require authentication and 'provider' role ---
router.use(verifyToken, authorizeRole('provider'));

// 1. Endpoint to populate the list view (shows usernames)
router.get('/search', searchAds);

// 2. Endpoint your component calls to fetch the specific profile data for redirect
router.get('/profile/:sharerId', getSharerProfileByAd);

export default router;