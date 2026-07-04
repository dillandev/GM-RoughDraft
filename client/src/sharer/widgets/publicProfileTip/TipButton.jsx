import { useState } from "react";
import { Button, Box } from "@mui/material";
import TipModal from "./TipModal";
import { useSharerPublicProfile } from "../../hooks/public_profile/usePublicProfile.jsx";
import styles from "../styles/tipStyles.js";

const TipButton = ({ sharerId }) => {
  const [open, setOpen] = useState(false);

  const {
    data: sharer,
    isLoading,
    error,
  } = useSharerPublicProfile(sharerId);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load PayPal info.</p>;
  }

  return (
    <Box sx={styles.tipButtonContainer}>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={styles.tipButtonSx}
      >
        Tip
      </Button>


      <TipModal
        open={open}
        handleClose={handleClose}
        paypalEmail={sharer?.paypal_email}
      />
    </Box>
  );
};

export default TipButton;