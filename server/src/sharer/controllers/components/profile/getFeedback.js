import db from '../../../../../config/db.js';

export const getSharerFeedback = async (req, res) => {
  try {
    // Get the logged-in user's ID from the request object
    const user_id = req.user.id;

    // Fetch the review data alongside the reviewer's username
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

    const { rows } = await db.query(queryText, [user_id]);

    return res.status(200).json(rows);

  } catch (error) {
    console.error('Error fetching feedback:', error);
    return res.status(500).json({ error: 'Server error fetching feedback' });
  }
};