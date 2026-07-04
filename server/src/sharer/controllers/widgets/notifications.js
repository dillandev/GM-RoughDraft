import db from '../../../../config/db.js';

// Get notifications for sharers
export const getSharerNotifications = async (req, res) => {
    try {
        const userId = req.user.id; // Assume authentication middleware sets req.user
        const result = await db.query(
            "SELECT * FROM notifications WHERE user_id = $1 AND is_read = FALSE ORDER BY created_at DESC",
            [userId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch notifications" });
    }
};

// Mark a notification as read
export const markNotificationRead = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const result = await db.query(
            "UPDATE notifications SET is_read = TRUE WHERE id = $1 AND user_id = $2 RETURNING *",
            [id, userId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Notification not found or not yours" });
        }

        res.json({ message: "Notification marked as read", notification: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update notification" });
    }
};