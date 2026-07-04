import { Box, Typography, CircularProgress } from '@mui/material';
import { useProviderFeedback } from '../../hooks/public_profile/useFeedback.jsx';
import { styles } from '../styles/profile/feedbackStyles.js';

export default function Feedback({ providerId }) {
  const { data: reviews, isLoading, isError, error } = useProviderFeedback(providerId);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">Error loading feedback: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h2" sx={styles.header}>
        Feedback
      </Typography>

      {reviews?.map((review) => {
        const totalDiamonds = Array.from({ length: Math.min(Math.max(review.rating, 0), 5) });

        return (
          <Box key={review.id} sx={styles.reviewItem}>
            <Typography sx={styles.reviewerName}>
              {review.reviewer_name}
            </Typography>

            <Box sx={styles.ratingContainer}>
              {totalDiamonds.map((_, index) => (
                <span key={index}>◆</span>
              ))}
            </Box>

            <Typography sx={styles.comment}>
              {review.comment}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}