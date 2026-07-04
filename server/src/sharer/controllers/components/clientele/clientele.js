import db from '../../../../../config/db.js';

export const getClientele = async (req, res) => {
  const sharerId = req.user.id; 
  try {
    const query = `
      SELECT b.id AS booking_id, b.provider_id, u.username AS provider_username 
      FROM bookings b
      JOIN users u ON b.provider_id = u.id
      WHERE b.sharer_id = $1 AND b.status = 'pending'
    `;
    const { rows } = await db.query(query, [sharerId]);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const handleBookingAction = async (req, res) => {
  const { bookingId } = req.params;
  const { action } = req.body; // 'accept' or 'decline'
  const sharerId = req.user.id;

  const status = action === 'accept' ? 'accepted' : 'cancelled';
  const notificationType = action === 'accept' ? 'booking request' : 'booking requests';

  try {
    // Get sharer's username and provider_id first
    const bookingDetails = await db.query(
      `SELECT b.provider_id, u.username AS sharer_username 
       FROM bookings b 
       JOIN users u ON b.sharer_id = u.id 
       WHERE b.id = $1 AND b.sharer_id = $2`,
      [bookingId, sharerId]
    );

    if (bookingDetails.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (action === 'accept') {
      const activeBookings = await db.query(
        `SELECT COUNT(*) FROM bookings WHERE sharer_id = $1 AND status IN ('pending', 'accepted')`,
        [sharerId]
      );
      if (parseInt(activeBookings.rows[0].count) >= 2) {
        return res.status(403).json({ error: 'You cannot accept more bookings. You already have 2 active bookings.' });
      }
    }

    const { provider_id, sharer_username } = bookingDetails.rows[0];
    const message = action === 'accept' 
      ? `${sharer_username} accepted your request` 
      : `${sharer_username} cancelled your request`;

    // Begin Transaction
    await db.query('BEGIN');

    // 1. Update Booking Status
    await db.query(
      'UPDATE bookings SET status = $1 WHERE id = $2',
      [status, bookingId]
    );
    // auto-delete all ads when 2nd booking becomes active
    if (action === 'accept') {
      const activeCount = await db.query(
        `SELECT COUNT(*) FROM bookings WHERE sharer_id = $1 AND status IN ('pending', 'accepted')`,
        [sharerId]
      );
      if (parseInt(activeCount.rows[0].count) === 2) {
        await db.query(`DELETE FROM ads WHERE sharer_id = $1`, [sharerId]);
      }
    }

    // 2. Insert Notification for the Provider
    await db.query(
      'INSERT INTO notifications (user_id, type, message) VALUES ($1, $2, $3)',
      [provider_id, notificationType, message]
    );

    await db.query('COMMIT');
    res.status(200).json({ message: `Booking successfully ${status}` });
  } catch (error) {
    await db.query('ROLLBACK');
    res.status(500).json({ error: error.message });
  }
};