import { useState } from 'react';
import { Box, MenuItem, Select, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from '../styles/search_ads/searchAdsStyles.js';

const CATEGORIES = [
  "Beauty & Personal Care", "Health & Wellness", "Food & Beverage", 
  "Fashion & Accessories", "Tech & Gadgets", "Gaming", 
  "Digital Products", "Home & Living", "Pets", 
  "Baby & Kids", "Fitness & Sports", "Travel", 
  "Education & Learning", "Business & Productivity", 
  "Entertainment", "Eco-Friendly & Sustainable", "DIY", 
  "Subscription & Memberships"
];

export const AdSearchBar = ({ onSearch }) => {
  const [category, setCategory] = useState('All');
  const [inputText, setInputText] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Prioritize text search input; if blank, submit current category selection
    const absoluteSearchQuery = inputText.trim() || (category !== 'All' ? category : '');
    if (absoluteSearchQuery) {
      onSearch(absoluteSearchQuery);
    }
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected !== 'All') {
      setInputText(''); // Clear input text if user relies strictly on category choices
      onSearch(selected);
    }
  };

  return (
    <Box component="form" onSubmit={handleSearchSubmit} sx={styles.searchBoxContainer}>
      {/* Dropdown Replacing the mockup "All" field */}
      <Select
        value={category}
        onChange={handleCategoryChange}
        sx={styles.selectDropdown}
        displayEmpty
      >
        <MenuItem value="All">All</MenuItem>
        {CATEGORIES.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>

      {/* Main Text Area Field */}
      <TextField
        placeholder="Input a product type: Technology"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={styles.inputField}
      />

      {/* Magnifying glass button icon */}
      <Button type="submit" sx={styles.searchButton}>
        <SearchIcon fontSize="small" />
      </Button>
    </Box>
  );
};