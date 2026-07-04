import db from '../../../../../config/db.js';

export const getAcceptedSharerBookings = async (req, res) => {
  const sharer_id = req.user.id;

  try {
    const queryText = `
      SELECT 
        b.id, 
        b.provider_id, 
        b.status,
        u.username AS provider_username
      FROM bookings b
      JOIN users u ON b.provider_id = u.id
      LEFT JOIN reviews r ON r.booking_id = b.id AND r.reviewer_id = $1
      WHERE b.sharer_id = $1 AND b.status = 'completed'
      AND r.id IS NULL
      ORDER BY b.created_at DESC;
    `;

    const result = await db.query(queryText, [sharer_id]);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching provider review bookings:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};