import db from '../../../../../config/db.js';

export const createBooking = async (req, res) => {
  const providerId = req.user.id; 
  const { sharerId } = req.params;

  if (providerId === sharerId) {
    return res.status(400).json({ message: "You cannot book yourself." });
  }

  try {
    await db.query('BEGIN');

    // Check if an active booking already exists to prevent duplicates
    const existingBookingCheck = await db.query(
      `SELECT id FROM bookings 
       WHERE provider_id = $1 AND sharer_id = $2 AND status IN ('pending', 'accepted')`,
      [providerId, sharerId]
    );

    if (existingBookingCheck.rows.length > 0) {
      await db.query('ROLLBACK');
      return res.status(400).json({ 
        message: "You already have a pending or active booking with this sharer. Please wait for them to respond." 
      });
    }

    // Insert booking
    const bookingResult = await db.query(
      `INSERT INTO bookings (provider_id, sharer_id, status) 
       VALUES ($1, $2, 'pending') 
       RETURNING *`,
      [providerId, sharerId]
    );

    // Get provider username for the notification string
    const providerUser = await db.query('SELECT username FROM users WHERE id = $1', [providerId]);
    const providerName = providerUser.rows[0]?.username || 'A provider';

    // Create notification for the sharer
    await db.query(
      `INSERT INTO notifications (user_id, type, message) 
       VALUES ($1, $2, $3)`,
      [sharerId, 'New Booking', `${providerName} booked you`]
    );

    await db.query('COMMIT');

    res.status(201).json({
      message: "Booking requested successfully.",
      booking: bookingResult.rows[0]
    });

  } catch (error) {
    await db.query('ROLLBACK');
    console.error("Booking Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};