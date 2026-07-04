import db from '../../../../../config/db.js';

export const getProviderProfileById = async (req, res) => {
  try {
    const { providerId } = req.params;

    const result = await db.query(
      `
      SELECT
        id,
        username,
        role
      FROM users
      WHERE id = $1
        AND role = 'provider'
      `,
      [providerId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Provider not found',
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Server error',
    });
  }
};