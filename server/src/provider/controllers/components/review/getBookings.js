import db from '../../../../../config/db.js';

export const getAcceptedProviderBookings = async (req, res) => {
  const provider_id = req.user.id;

  try {
    const queryText = `
      SELECT 
        b.id, 
        b.sharer_id, 
        b.status,
        u.username AS sharer_username
      FROM bookings b
      JOIN users u ON b.sharer_id = u.id
      LEFT JOIN reviews r ON r.booking_id = b.id AND r.reviewer_id = $1
      WHERE b.provider_id = $1 AND b.status = 'accepted'
      AND r.id IS NULL
      ORDER BY b.created_at DESC;
    `;

    const result = await db.query(queryText, [provider_id]);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching provider review bookings:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};