import cron from 'node-cron';
import db from '../../../config/db.js';

cron.schedule('0 0 * * *', async () => {
  console.log('Running weekly credit refill check...');

  try {
    const sharers = await db.query(
      `SELECT c.user_id, c.amount, c.last_refill
       FROM credits c
       JOIN users u ON c.user_id = u.id
       WHERE u.role = 'sharer'`
    );

    for (const sharer of sharers.rows) {
      const { user_id, amount, last_refill } = sharer;

      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const isDue = !last_refill || new Date(last_refill) <= sevenDaysAgo;

      if (!isDue) continue;

      let toAdd = 0;
      if (amount === 0) toAdd = 2;
      else if (amount === 1) toAdd = 1;
      else continue; // 2 or more — skip

      await db.query(
        `UPDATE credits SET amount = amount + $1, last_refill = NOW() WHERE user_id = $2`,
        [toAdd, user_id]
      );

      console.log(`Added ${toAdd} credit(s) to sharer ${user_id}`);
    }
  } catch (error) {
    console.error('Credit refill error:', error);
  }
});