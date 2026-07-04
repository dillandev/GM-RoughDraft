import { useState } from 'react';
import { Button, Box, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useBookSharer } from '../../hooks/public_profile/useBookingSharer.jsx';
import { bookingStyles } from '../styles/public_profile/bookingStyles.js';

export default function BookingButton( {sharerId} ) {

  // State to manage the MUI Snackbar alert
  const [alertState, setAlertState] = useState({
    open: false,
    message: '',
    severity: 'info', // 'success' | 'error' | 'warning' | 'info'
  });

  // Helper to trigger the alert
  const triggerAlert = (message, severity) => {
    setAlertState({ open: true, message, severity });
  };

  // Close handler for the snackbar
  const handleCloseAlert = (_event, reason) => {
    if (reason === 'clickaway') return;
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  // Pass success/error callbacks directly into the mutate call or hook
  const { mutate, isLoading } = useBookSharer(sharerId);

  const handleBooking = () => {
    if (!sharerId) {
      triggerAlert('Invalid Sharer ID missing from URL', 'error');
      return;
    }

    // Executing mutate with inline callbacks so the component can handle UI notifications
    mutate(undefined, {
      onSuccess: (data) => {
        triggerAlert(data.message || 'Booking requested successfully!', 'success');
      },
      onError: (error) => {
        triggerAlert(error.message || 'An error occurred.', 'error');
      }
    });
  };

  return (
    <Box sx={bookingStyles.tipButtonContainer}>
      <Button
        onClick={handleBooking}
        disabled={isLoading}
        sx={bookingStyles.tipButtonSx}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Book Now'}
      </Button>

      {/* MUI Global Notification Toast */}
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity={alertState.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}