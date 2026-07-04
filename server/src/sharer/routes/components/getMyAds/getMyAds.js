import express from 'express';
import { verifyToken } from '../../../../middleware/auth.js';
import { getMyAds, deleteAd } from '../../../controllers/components/getMyAds/getMyAds.js'

const router = express.Router();

const authorizeRole = (requiredRole) => (req, res, next) => {
  if (!req.user || req.user.role !== requiredRole) {
    return res.status(403).json({ error: 'Forbidden: Insufficient role' });
  }
  next();
};

router.use(verifyToken, authorizeRole('sharer'));

// GET /api/sharer/get-my-ads
router.get('/get-my-ads', getMyAds);

// DELETE /api/sharer/delete-ad
router.delete('/delete-ad', deleteAd);

export default router;