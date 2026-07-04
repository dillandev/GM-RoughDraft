import { Router } from 'express';
import { createBooking } from '../../../controllers/components/public_profile/bookingRequest.js';
import { verifyToken } from '../../../../middleware/auth.js'

const router = Router();

// Endpoint matching your frontend fetch call
router.post('/bookings/sharer/:sharerId', verifyToken, createBooking);

export default router;