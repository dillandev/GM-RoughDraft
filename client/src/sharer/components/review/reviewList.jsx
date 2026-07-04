import { Box, Typography, CircularProgress } from '@mui/material';
import { useAcceptedBookings } from '../../hooks/review/useReviews.jsx';
import ReviewCard from './reviewCard.jsx';
import { styles } from '../styles/review/reviewCardStyle.js';

const SharerReviewList = () => {
  const { data: bookings, isLoading, isError, error } = useAcceptedBookings();

  return (
    <Box sx={styles.listContainer}>
      <Box sx={styles.topHeader}>Review</Box>

      {isLoading && <CircularProgress color="inherit" sx={{ mt: 4 }} />}

      {isError && (
        <Typography color="error" sx={{ mt: 4 }}>
          Error: {error.message}
        </Typography>
      )}

      {!isLoading && !isError && (!bookings || bookings.length === 0) && (
        <Typography sx={{ mt: 4, color: '#666666' }}>
          No accepted bookings available to review.
        </Typography>
      )}

      {!isLoading && !isError && bookings?.map((booking) => (
        <ReviewCard
          key={booking.id}
          bookingId={booking.id}
          revieweeId={booking.provider_id}
          username={booking.provider_username}
        />
      ))}
    </Box>
  );
};

export default SharerReviewList;