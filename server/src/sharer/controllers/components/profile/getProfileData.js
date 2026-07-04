import db from '../../../../../config/db.js';

export const getSharerProfileData = async (req, res) => {
  try {
    const userId = req.user.id;

    const query = `
      SELECT
        contact_method,
        contact_info,
        social_media_method,
        social_media_username,
        paypal_email
      FROM sharer_profiles
      WHERE user_id = $1
    `;

    const result = await db.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Sharer profile data not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};