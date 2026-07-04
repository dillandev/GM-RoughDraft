import { Box, Typography, Button } from '@mui/material';
import { useMyAds } from '../../../hooks/ads/myAds/useMyAds.jsx';
import { myAdsStyles } from '../../styles/ads/myAds/myAdsStyles.js';

const MyAd = () => {
  const { adsQuery, deleteAdMutation } = useMyAds();
  const styles = myAdsStyles;

  const ads = adsQuery.data || [];

  return (
    <Box sx={styles.mainContainer}>
      {/* Header */}
      <Box sx={styles.headerContainer}>
        <Typography sx={styles.headerText}>My Ads</Typography>
      </Box>

      {/* State Handlers */}
      {adsQuery.isLoading && <Typography>Loading ads...</Typography>}
      {adsQuery.isError && <Typography color="error">Failed to load ads.</Typography>}

      {/* Ads List Grid */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {ads.map((ad) => (
          <Box key={ad.id} sx={styles.adItem}>
            
            <Typography sx={styles.adCategoryText}>
              {ad.category
                ? `Category: ${ad.category}`
                : `Hashtag: ${ad.hashtag}`}
            </Typography>
            
            <Button
              variant="outlined"
              sx={styles.deleteButton}
              onClick={() => deleteAdMutation.mutate(ad.id)}
              disabled={deleteAdMutation.isPending}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Box>


    </Box>
  );
};

export default MyAd;