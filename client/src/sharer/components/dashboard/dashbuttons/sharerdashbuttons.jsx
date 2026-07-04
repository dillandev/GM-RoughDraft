import { Box, Button, Stack} from "@mui/material";
import { useDashbuttons } from "../../../hooks/dashboard/useDashButtons.jsx/useDashButtons.jsx";
import styles from "../../styles/dashbuttons/dashbuttonstyle.js";


export default function DashboardButtons() {
  const { goToSharerProfile, goToSharerAds, goToSharerClientele, goToSharerReview } = useDashbuttons();
  
  return (
      <Box sx={styles.dashButtonsContainer}>
        <Stack spacing={2}  >

          <Stack direction="row" spacing={2} alignItems="center">
              
          <Button
            variant="contained"
            onClick={goToSharerProfile}
            sx={styles.dashButtons}
          >
            Profile
          </Button>

          <Button
            variant="contained"
            onClick={goToSharerAds}
            sx={styles.dashButtons}
          >
            Ads
          </Button>

          <Button
            variant="contained"
            onClick={goToSharerClientele}
            sx={styles.dashButtons}
          >
            Clientele
          </Button>
              
          </Stack>

          <Button
            variant="contained"
            onClick={goToSharerReview}
            sx={styles.reviewdashButtons}
          >
            Review
          </Button>
        
        </Stack>
        </Box>
      
    );
  }