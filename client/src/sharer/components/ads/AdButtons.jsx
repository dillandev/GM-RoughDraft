import { Box, Button, Stack} from "@mui/material";
import { useAdButtons } from "../../hooks/ads/useAdsButtons.jsx";
import styles from "../styles/ads/AdButtons.js";


export default function DashboardButtons() {
  const { goToCreateAds, goToMyAds } = useAdButtons();

  return (
      <Box sx={styles.adButtonsContainer}>
        <Stack spacing={2}  >

          <Stack direction="row" spacing={2} alignItems="center">

          <Button
            variant="contained"
            onClick={goToCreateAds}
            sx={styles.adButtons}
          >
            Create Ad
          </Button>

          <Button
            variant="contained"
            onClick={goToMyAds}
            sx={styles.adButtons}
          >
            My Ads
          </Button>

          </Stack>

        </Stack>
        </Box>

    );
  }