import { Box, Button, Stack} from "@mui/material";
import { useDashbuttons } from "../../hooks/dashboard/useDashboardBut.jsx";
import styles from "../styles/dashboard/dashbuttonsstyle.js";


export default function DashboardView() {
  const { goToProviderProfile, goToProviderSearchAds, goToProviderBooking, goToProviderReview} = useDashbuttons();

  return (
      <Box sx={styles.dashButtonsContainer}>
        <Stack spacing={2}  >

          <Stack direction="row" spacing={2} alignItems="center">

          <Button
            variant="contained"
            onClick={goToProviderProfile}
            sx={styles.dashButtons}
          >
            Profile
          </Button>

          <Button
            variant="contained"
            onClick={goToProviderSearchAds}
            sx={styles.dashButtons}
          >
            Search Ads
          </Button>

          <Button
            variant="contained"
            onClick={goToProviderBooking}
            sx={styles.dashButtons}
          >
            Bookings
          </Button>

          </Stack>

          <Button
            variant="contained"
            onClick={goToProviderReview}
            sx={styles.reviewdashButtons}
          >
            Review
          </Button>

        </Stack>
        </Box>

    );
  }