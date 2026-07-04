import { useSharerProfileData } from "../../hooks/getProfiledata/useGetProfileData.jsx";
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { profileDataStyles } from "../styles/profiledata/profiledatastyles.js";

const ProfileData = () => {
  const { data, isLoading, isError, error } =
    useSharerProfileData();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>{error.message}</Typography>;
  }

  return (
    <Box sx={profileDataStyles.container}>
      
        <Box p={3}>


          <Box sx={profileDataStyles.grid}>
            <Box sx={profileDataStyles.item}>
              <Typography sx={profileDataStyles.label}>
                Contact Method
              </Typography>
              <Typography sx={profileDataStyles.value}>
                {data.contact_method || "N/A"}
              </Typography>
            </Box>

            <Box sx={profileDataStyles.item}>
              <Typography sx={profileDataStyles.label}>
                Contact Info
              </Typography>
              <Typography sx={profileDataStyles.value}>
                {data.contact_info || "N/A"}
              </Typography>
            </Box>

            <Box sx={profileDataStyles.item}>
              <Typography sx={profileDataStyles.label}>
                Social Media Method
              </Typography>
              <Typography sx={profileDataStyles.value}>
                {data.social_media_method || "N/A"}
              </Typography>
            </Box>

            <Box sx={profileDataStyles.item}>
              <Typography sx={profileDataStyles.label}>
                Social Media Username
              </Typography>
              <Typography sx={profileDataStyles.value}>
                {data.social_media_username || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Box>
      <Button
        component={Link}
        to="/sharer/dashboard/edit_sharer_profile"
        sx={profileDataStyles.editButton}
        variant="contained"
      >
        edit
      </Button>
    </Box>
  );
};

export default ProfileData;