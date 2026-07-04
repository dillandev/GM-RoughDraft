import db from '../../../../../config/db.js';

export const getPublicSharerFeedback = async (req, res) => {
  try {
    // Get the specific profile ID from the URL parameters
    const { sharerId } = req.params;

    const queryText = `
      SELECT 
        r.id,
        r.rating,
        r.comment,
        r.created_at,
        u.username AS reviewer_name
      FROM reviews r
      JOIN users u ON r.reviewer_id = u.id
      WHERE r.reviewee_id = $1
      ORDER BY r.created_at DESC;
    `;

    const { rows } = await db.query(queryText, [sharerId]);

    return res.status(200).json(rows);

  } catch (error) {
    console.error('Error fetching public feedback:', error);
    return res.status(500).json({ error: 'Server error fetching feedback' });
  }
};