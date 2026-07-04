import db from '../../../../../config/db.js';

export const getProviderBookings = async (req, res) => {
  const providerId = req.user.id;

  try {
    const query = `
      SELECT 
        b.id AS booking_id,
        b.status AS booking_status,
        b.sharer_id,
        u.username AS sharer_username
      FROM bookings b
      JOIN users u ON b.sharer_id = u.id
      WHERE b.provider_id = $1
      ORDER BY b.created_at DESC;
    `;

    const { rows } = await db.query(query, [providerId]);

    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching provider bookings:', error);
    return res.status(505).json({ message: 'Internal server error' });
  }
};