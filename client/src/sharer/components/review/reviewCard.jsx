import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useCreateReview } from '../../hooks/review/useReviews.jsx';
import { styles } from '../styles/review/reviewCardStyle.js';

const ReviewCard = ({ bookingId, revieweeId, username }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const [alert, setAlert] = useState({
    open: false,
    severity: 'success',
    message: '',
  });

  const { mutate, isLoading } = useCreateReview(
    () => {
      setAlert({
        open: true,
        severity: 'success',
        message: `Review submitted successfully for ${username}!`,
      });

      setComment('');
      setRating(0);
    },
    (error) => {
      setAlert({
        open: true,
        severity: 'error',
        message: error.message || 'An error occurred.',
      });
    }
  );

  const handleSubmit = () => {
    if (rating === 0) {
      setAlert({
        open: true,
        severity: 'warning',
        message: 'Please select a diamond rating before submitting.',
      });
      return;
    }

    mutate({
      booking_id: bookingId,
      reviewee_id: revieweeId,
      rating,
      comment,
    });
  };

  const handleCloseAlert = (_, reason) => {
    if (reason === 'clickaway') return;

    setAlert((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Box sx={styles.cardContainer}>
        <Box sx={styles.sectionHeader}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'inherit', fontSize: 'inherit' }}
          >
            {username}
          </Typography>
        </Box>

        <Box sx={styles.subHeader}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'inherit', fontSize: 'inherit' }}
          >
            Review
          </Typography>
        </Box>

        <Box sx={styles.bodyContent}>
          <Box sx={styles.textAreaWrapper}>
            <Box sx={styles.terminalPrompt}>&gt;_</Box>
            <textarea
              style={styles.nativeInput}
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Box>
        </Box>

        <Box sx={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Box
              key={index}
              onClick={() => setRating(index)}
              sx={{
                ...styles.diamondIcon,
                color: index <= rating ? '#000000' : '#cccccc',
              }}
            >
              ◆
            </Box>
          ))}
        </Box>

        <Box sx={styles.actionContainer}>
          <Button
            disableRipple
            sx={styles.submitButton}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ReviewCard;