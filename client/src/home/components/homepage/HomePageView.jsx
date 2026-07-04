import { Box, Button, Stack, Typography } from "@mui/material";
import { useHomePage } from "../../hooks/homepage/useHomePage.jsx";
import styles from "../../styles/homepage/HomePageStyles.js";

export default function HomePageView() {
  const { goToLogin, goToSharerSignup, goToProviderSignup } = useHomePage();

  return (
    <Box sx={styles.page}>

      <Box sx={styles.topSection}>
        
        <Typography variant="h3" 
          fontWeight="bold" 
          sx={styles.logotext}>
          KYZE
        </Typography>

       
        <Button
          variant="contained"
          onClick={goToLogin}
          sx={styles.signInButton}
        >
          Sign In
        </Button>
      </Box>

    

      <Box sx={styles.bottomSection}>

        <Stack spacing={2} 
          
          sx= {styles.providerSignup} >
          
          <Typography variant="h4"sx={styles.text}>
            Become a Provider
          </Typography>

          <Button
            variant="contained"
            onClick={goToProviderSignup}
            sx={styles.signUpButton}
          >
            Sign Up
          </Button>
        </Stack>

        <Stack spacing={2} 
          sx={styles.sharerSignup}>
          
          <Typography variant="h4"sx={styles.text}>
            Become a Sharer
          </Typography>

          <Button
            variant="contained"
            onClick={goToSharerSignup}
            sx={styles.signUpButton}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}