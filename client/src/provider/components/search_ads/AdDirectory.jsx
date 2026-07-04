import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AdSearchBar } from './AdSearchBar.jsx';
import { AdList } from './AdList.jsx';
import { useSearchAds } from '../../hooks/search_ads/useSearchAds.jsx';
import { styles } from '../styles/search_ads/searchAdsStyles.js';

export const AdDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: ads, isLoading, isError } = useSearchAds(searchQuery);

  return (
    <Box sx={styles.container}>
      {/* Structural Title block matching schema mockups */}
      <Typography variant="h1" sx={styles.headerTitle}>
        Ads Directory
      </Typography>

      {/* Component 1: Functional Query Interface inputs */}
      <AdSearchBar onSearch={setSearchQuery} />

      {/* Component 2: Results List displaying targeted user items */}
      <AdList 
        ads={ads} 
        isLoading={isLoading} 
        isError={isError} 
        currentQuery={searchQuery} 
      />

    </Box>
  );
};