import db from '../../../../../config/db.js';

export const getSharerProfileById = async (req, res) => {
  try {
    const { sharerId } = req.params;

    const result = await db.query(
      `
      SELECT
        sp.id,
        sp.contact_method,
        sp.contact_info,
        sp.social_media_method,
        sp.social_media_username,
        sp.paypal_email,
        u.username,
        u.role
      FROM sharer_profiles sp
      JOIN users u
        ON sp.user_id = u.id
      WHERE sp.user_id = $1
      `,
      [sharerId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Sharer profile not found",
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};