import db from '../../../../../config/db.js';

export const createAd = async (req, res) => {
  const userId = req.user.id;
  const { category, hashtag } = req.body;

  const activeBookings = await db.query(
    `SELECT COUNT(*) FROM bookings WHERE sharer_id = $1 AND status IN ('pending', 'accepted')`,
    [userId]
  );
  if (parseInt(activeBookings.rows[0].count) >= 2) {
    return res.status(403).json({ error: 'You cannot create ads while you have 2 active bookings.' });
  }

  try {
    // 1. Validate input: must be exactly one
    if ((category && hashtag) || (!category && !hashtag)) {
      return res.status(400).json({
        error: 'You must provide either a category OR a hashtag, but not both.',
      });
    }

    // 2. Check credits
    const creditResult = await db.query(
      `SELECT amount FROM credits WHERE user_id = $1`,
      [userId]
    );

    if (creditResult.rowCount === 0) {
      return res.status(404).json({ error: 'Credits record not found' });
    }

    const credits = creditResult.rows[0].amount;

    if (credits <= 0) {
      return res.status(400).json({
        error: 'Insufficient credits to create an ad',
      });
    }

    // 3. Transaction start
    await db.query('BEGIN');

    // 4. Insert ad
    const adResult = await db.query(
      `
      INSERT INTO ads (sharer_id, category, hashtag)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [userId, category || null, hashtag || null]
    );

    // 5. Deduct credit
    await db.query(
      `
      UPDATE credits
      SET amount = amount - 1
      WHERE user_id = $1
      `,
      [userId]
    );

    await db.query('COMMIT');

    return res.status(201).json({
      message: 'Ad created successfully',
      ad: adResult.rows[0],
    });
  } catch (error) {
    await db.query('ROLLBACK');

    console.error('Create Ad Error:', error);

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
};