import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, CircularProgress } from '@mui/material';
import { useProviderBookings } from '../../hooks/booking/useBooking.jsx';
import { styles } from '../styles/booking/bookingStyles.js';

const BookingList = () => {
  const navigate = useNavigate();
  const { data: bookings, isLoading, error } = useProviderBookings();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading bookings</Typography>;

  return (
    <Box sx={styles.wrapper}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      {bookings?.map((booking) => (
        <Box
          key={booking.booking_id}
          sx={styles.cardBox}
          onClick={() => navigate(`/sharer-profile/${booking.sharer_id}`)}
        >
          <Typography sx={styles.username}>
            {booking.sharer_username}
          </Typography>

          <Divider sx={styles.divider} />

          <Typography sx={styles.status}>
            Status: {booking.booking_status}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>   
  );
};

export default BookingList;