import {
  Modal,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import styles from "../styles/tipStyles.js";

const TipModal = ({ open, handleClose, paypalEmail }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.modalContainerSx}>
        <Box sx={styles.modalContentSx}>
          <IconButton
            onClick={handleClose}
            sx={styles.closeButtonSx}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" gutterBottom>
            PayPal Email
          </Typography>

          <Typography sx={styles.emailTextSx}>
            {paypalEmail}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default TipModal;