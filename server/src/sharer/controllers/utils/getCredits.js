import db from '../../../../config/db.js';

export const getUserCredits = async (req, res) => {
  try {
    // Get user ID from route params
    const { userId } = req.params;

    // Query credits table
    const result = await db.query(
      `
      SELECT amount
      FROM credits
      WHERE user_id = $1
      `,
      [userId]
    );

    // If no credits found
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Credits not found for this user'
      });
    }

    // Return credits
    return res.status(200).json({
      success: true,
      credits: result.rows[0].amount
    });

  } catch (error) {
    console.error('Error getting user credits:', error);

    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};