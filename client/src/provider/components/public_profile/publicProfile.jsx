import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useProviderPublicProfile } from "../../hooks/public_profile/usePublicProfile.jsx";
import profile_header from "../styles/public_profile/profile_header.js";
import Feedback from "./feedback.jsx";

const ProviderPublicProfilePage = () => {
  const { providerId } = useParams();

  const {
    data: provider,
    isLoading,
    error,
  } = useProviderPublicProfile(providerId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Failed to load profile</Typography>;
  }

  if (!provider) {
    return <Typography>No profile found</Typography>;
  }

  return (
    <Box sx={profile_header.container}>
      <Typography variant="h6" component="div" sx={profile_header.role}>
        {provider.role}
      </Typography>

      <Typography variant="body1" component="div" sx={profile_header.username}>
        {provider.username}
      </Typography>
      
      <Feedback providerId={providerId} />
      
    </Box>
  );
};

export default ProviderPublicProfilePage;