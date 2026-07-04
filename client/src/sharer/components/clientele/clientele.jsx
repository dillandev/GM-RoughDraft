import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { useClientele } from '../../hooks/clientele/useClientele.jsx';
import { styles } from '../styles/clientele/ClienteleStyles.js';

export default function Clientele() {
  const navigate = useNavigate();
  // FIXED: Added handleAction to the destructuring assignment here
  const { clientele, isLoading, handleAction } = useClientele();

  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Clientele</Typography>

      {clientele.map((item) => (
        <Box 
          key={item.booking_id} 
          sx={styles.card}
          onClick={() => navigate(`/provider-profile/${item.provider_id}`)}
        >
          <Typography sx={styles.username}>{item.provider_username}</Typography>
          <Box sx={styles.buttonContainer}>
            <Button 
              sx={styles.btn} 
              onClick={(e) => {
                e.stopPropagation(); // Stops the card click navigation from triggering
                handleAction({ bookingId: item.booking_id, action: 'accept' });
              }}
            >
              Accept
            </Button>
            <Button 
              sx={styles.btn} 
              onClick={(e) => {
                e.stopPropagation(); // Stops the card click navigation from triggering
                handleAction({ bookingId: item.booking_id, action: 'decline' });
              }}
            >
              Decline
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}