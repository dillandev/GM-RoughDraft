import db from '../../../../../config/db.js';

// GET /api/sharer/get-my-ads
export const getMyAds = async (req, res) => {
  try {
    const userId = req.user.id;

    const queryText = `
      SELECT
        id,
        category,
        hashtag
      FROM ads
      WHERE sharer_id = $1
      ORDER BY created_at DESC;
    `;

    const result = await db.query(queryText, [userId]);

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching ads:', error);

    return res.status(500).json({
      error: 'Internal server error fetching your ads.',
    });
  }
};

// DELETE /api/sharer/delete-ad
export const deleteAd = async (req, res) => {
  try {
    const { adId } = req.body;
    const userId = req.user.id;

    if (!adId) {
      return res.status(400).json({
        error: 'adId is required.',
      });
    }

    const queryText = `
      DELETE FROM ads
      WHERE id = $1
      AND sharer_id = $2
      RETURNING id;
    `;

    const result = await db.query(queryText, [
      adId,
      userId,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: 'Ad not found or unauthorized to delete.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Ad successfully deleted.',
      deletedAdId: result.rows[0].id,
    });
  } catch (error) {
    console.error('Error deleting ad:', error);

    return res.status(500).json({
      error: 'Internal server error trying to delete the ad.',
    });
  }
};