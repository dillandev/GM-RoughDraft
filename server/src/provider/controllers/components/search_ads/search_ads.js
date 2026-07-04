import db from '../../../../../config/db.js';

/**
 * Search ads by category or hashtag and return matching records with usernames
 * GET /api/ads/search?query=Technology
 */
export const searchAds = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    const sqlQuery = `
      SELECT 
        a.id AS ad_id,
        a.sharer_id,
        u.username
      FROM ads a
      JOIN users u ON a.sharer_id = u.id
      WHERE a.category ILIKE $1 OR a.hashtag ILIKE $1
      ORDER BY a.created_at DESC;
    `;

    const values = [`%${query}%`];
    const { rows } = await db.query(sqlQuery, values);

    return res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.error('Error executing search:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Get Sharer Profile details for frontend redirection/view
 * GET /api/ads/profile/:sharerId
 */
export const getSharerProfileByAd = async (req, res) => {
  const { sharerId } = req.params;

  try {
    // Joins users and sharer_profiles to get all relevant public profile data
    const sqlQuery = `
      SELECT 
        u.id AS user_id,
        u.username,
        u.email,
        sp.id AS profile_id
      FROM users u
      LEFT JOIN sharer_profiles sp ON u.id = sp.user_id
      WHERE u.id = $1 AND u.role = 'sharer';
    `;

    const { rows } = await db.query(sqlQuery, [sharerId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Sharer profile not found' });
    }

    return res.status(200).json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching sharer profile:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};