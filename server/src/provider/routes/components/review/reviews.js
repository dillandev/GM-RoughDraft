import express from 'express';
import { createReview } from '../../../controllers/components/review/reviews.js';
import { getAcceptedProviderBookings } from '../../../controllers/components/review/getBookings.js';
import { verifyToken } from '../../../../middleware/auth.js';

const router = express.Router();

const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

// All provider routes require authentication and the 'provider' role
router.use(verifyToken, authorizeRole('provider'));

// GET  - Fetch active bookings pending a review
router.get('/get-bookings', getAcceptedProviderBookings);

// POST  - Submit a single review
router.post('/create-review', createReview);

export default router;