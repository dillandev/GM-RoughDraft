import db from '../../../../../config/db.js';

export const EditSharerProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const {
      contact_method,
      contact_info,
      social_media_method,
      social_media_username,
      paypal_email,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        error: "user_id is required",
      });
    }

    const result = await db.query(
      `
      INSERT INTO sharer_profiles (
        user_id,
        contact_method,
        contact_info,
        social_media_method,
        social_media_username,
        paypal_email
      )
      VALUES ($1, $2, $3, $4, $5, $6)

      ON CONFLICT (user_id)
      DO UPDATE SET
        contact_method = EXCLUDED.contact_method,
        contact_info = EXCLUDED.contact_info,
        social_media_method = EXCLUDED.social_media_method,
        social_media_username = EXCLUDED.social_media_username,
        paypal_email = EXCLUDED.paypal_email

      RETURNING *
      `,
      [
        userId,
        contact_method,
        contact_info,
        social_media_method,
        social_media_username,
        paypal_email,
      ]
    );

    res.status(200).json({
      message: "Sharer profile saved successfully",
      profile: result.rows[0],
    });
  } catch (error) {
    console.error("Sharer profile error:", error);

    res.status(500).json({
      error: "Server error",
    });
  }
};