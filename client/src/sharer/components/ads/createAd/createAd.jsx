import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Select, 
  MenuItem, 
  TextField, 
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import { useCreateAd } from '../../../hooks/ads/createAd/useCreateAd.jsx';
import { styles } from '../../styles/ads/createAd/createAdstyles.js'; // Imported styles

const CATEGORIES = [
  "Beauty & Personal Care", "Health & Wellness", "Food & Beverage", 
  "Fashion & Accessories", "Tech & Gadgets", "Gaming", 
  "Digital Products", "Home & Living", "Pets", 
  "Baby & Kids", "Fitness & Sports", "Travel", 
  "Education & Learning", "Business & Productivity", 
  "Entertainment", "Eco-Friendly & Sustainable", "DIY", 
  "Subscription & Memberships"
];

export default function SharerCreateAd() {
  const [category, setCategory] = useState('');
  const [hashtag, setHashtag] = useState('');

  const [message, setMessage] = useState({
    open: false,
    text: '',
    severity: 'success',
  });

  const { mutate: createAd, isPending } = useCreateAd();

  const handleCloseMessage = () => {
    setMessage((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value) setHashtag(''); 
  };

  const handleHashtagChange = (e) => {
    setHashtag(e.target.value);
    if (e.target.value) setCategory(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((category && hashtag) || (!category && !hashtag)) {
      setMessage({
        open: true,
        text: 'You must provide either a category OR a hashtag, but not both.',
        severity: 'error',
      });
      return;
    }

    const payload = category ? { category } : { hashtag };

    createAd(payload, {
      onSuccess: (data) => {
        setMessage({
          open: true,
          text: data.message || 'Ad created successfully!',
          severity: 'success',
        });

        setCategory('');
        setHashtag('');
      },

      onError: (error) => {
        setMessage({
          open: true,
          text: error.message || 'Something went wrong.',
          severity: 'error',
        });
      },
    });
  };

  return (
    <>
      <Box sx={styles.pageContainer}>
        {/* Header Element */}
        <Box sx={styles.header}>
          <Typography variant="h6" sx={styles.headerTitle}>
            Create Ad
          </Typography>
        </Box>

        {/* Main Form */}
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={styles.formContainer}
        >
          <Typography variant="body1" sx={styles.labelText}>
            Product type you want to share:
          </Typography>

          <Select
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
            size="small"
            sx={styles.dropdown}
          >
            <MenuItem value="" disabled>Select Category</MenuItem>
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>

          <Typography variant="body2" sx={styles.orDivider}>
            OR
          </Typography>

          <Typography variant="body1" sx={styles.labelText}>
            Product type you want to share:
          </Typography>

          <TextField
            placeholder="# Input product type"
            value={hashtag}
            onChange={handleHashtagChange}
            size="small"
            sx={styles.inputField}
            inputProps={{ style: styles.inputOverride }}
          />

          <Button 
            type="submit" 
            variant="contained" 
            disabled={isPending || (!category && !hashtag)}
            sx={styles.submitButton}
          >
            {isPending ? 'Creating...' : 'Submit Ad'}
          </Button>
        </Box>
      </Box>

      {/* Snackbar MUST be inside the fragment too */}
      <Snackbar
        open={message.open}
        autoHideDuration={4000}
        onClose={handleCloseMessage}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={handleCloseMessage}
          severity={message.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message.text}
        </Alert>
      </Snackbar>
    </>
  );
}