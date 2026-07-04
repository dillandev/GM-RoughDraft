import { useNavigate } from 'react-router-dom'; // Assumes React Router v6 is installed
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { styles } from '../styles/search_ads/searchAdsStyles.js';

export const AdList = ({ ads, isLoading, isError, currentQuery }) => {
  const navigate = useNavigate();

  if (!currentQuery) return null;

  return (
    <Box sx={styles.adsSection}>
      <Typography variant="h2" sx={styles.sectionTitle}>
        {currentQuery} Ads
      </Typography>
      <Box component="hr" sx={styles.divider} />

      {isLoading && <CircularProgress color="inherit" size={30} />}

      {isError && (
        <Typography color="error">
          Error retrieving ads. Please check authorization token.
        </Typography>
      )}

      {!isLoading && !isError && ads?.length === 0 && (
        <Typography color="textSecondary">No active ads match your selection.</Typography>
      )}

      <Box sx={styles.listContainer}>
        {!isLoading &&
          ads?.map((ad) => (
            <Button
              key={ad.ad_id}
              variant="contained"
              sx={styles.adCardButton}
              onClick={() => navigate(`/sharer-profile/${ad.sharer_id}`)}
            >
              {ad.username}
            </Button>
          ))}
      </Box>
    </Box>
  );
};