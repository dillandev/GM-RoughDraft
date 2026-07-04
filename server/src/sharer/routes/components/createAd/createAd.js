import express from 'express';
import { verifyToken } from '../../../../middleware/auth.js';
import { createAd } from '../../../controllers/components/createAd/createAd.js';

const router = express.Router();

const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

router.use(verifyToken, authorizeRole('sharer'));

router.post('/', createAd);

export default router;