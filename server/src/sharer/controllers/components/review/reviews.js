import db from '../../../../../config/db.js';

export const createReview = async (req, res) => {
  const { booking_id, reviewee_id, rating, comment } = req.body;
  const reviewer_id = req.user.id;

  if (!booking_id || !reviewee_id || !rating) {
    return res.status(400).json({ error: 'Missing required fields: booking_id, reviewee_id, and rating are required.' });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be an integer between 1 and 5.' });
  }

  if (reviewer_id === reviewee_id) {
    return res.status(400).json({ error: 'You cannot review yourself.' });
  }

  try {
    const bookingCheck = await db.query(
      `SELECT status, provider_id 
       FROM bookings 
       WHERE id = $1 AND sharer_id = $2`,
      [booking_id, reviewer_id]
    );

    if (bookingCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found or you are not the sharer for this booking.' });
    }

    const booking = bookingCheck.rows[0];

    if (booking.status !== 'completed') {
      return res.status(400).json({ 
        error: 'You can only leave a review while the booking status is completed.' 
      });
    }

    if (booking.provider_id !== reviewee_id) {
      return res.status(400).json({ error: 'The reviewee must be the sharer associated with this booking.' });
    }

    const sharerResult = await db.query(
      `SELECT username FROM users WHERE id = $1`,
      [reviewer_id]
    );
    const sharerUsername = sharerResult.rows[0].username;

    const queryText = `
      INSERT INTO reviews (booking_id, reviewer_id, reviewee_id, rating, comment)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, booking_id, reviewer_id, reviewee_id, rating, comment, created_at;
    `;

    const values = [booking_id, reviewer_id, reviewee_id, rating, comment || null];
    const result = await db.query(queryText, values);


    await db.query(
      `INSERT INTO notifications (user_id, type, message) VALUES ($1, $2, $3)`,
      [reviewee_id, 'review', `${sharerUsername} left you a review`]
    );

    return res.status(201).json({
      message: 'Review submitted successfully.',
      review: result.rows[0]
    });

  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'You have already submitted a review for this booking.' });
    }

    console.error('Error creating review:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};