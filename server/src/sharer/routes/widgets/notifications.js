import express from 'express';
import { getSharerNotifications, markNotificationRead } from '../../controllers/widgets/notifications.js';
import { verifyToken } from '../../../middleware/auth.js'

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

// GET /api/sharer/notifications → list sharer's notifications
router.get('/notifications', getSharerNotifications);

// PATCH /api/sharer/notifications/:id/read → mark a notification as read
router.patch('/notifications/:id/read', markNotificationRead);

export default router;