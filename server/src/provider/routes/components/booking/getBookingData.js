import express from 'express';
import { getProviderBookings } from '../../../controllers/components/booking/getBookingData.js';
import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

// Middleware to check user role from JWT
const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

// --- All sharer routes require authentication and 'provider' role ---
router.use(verifyToken, authorizeRole('provider'));

router.get('/', getProviderBookings);

export default router;