import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useSharerPublicProfile } from "../../hooks/public_profile/usePublicProfile.jsx";
import TipButton from "../../widgets/publicProfileTip/TipButton.jsx"
import { PublicProfileStyles } from "../styles/public_profile/PublicProfileStyles.js";
import profile_header from "../styles/public_profile/profile_header.js"
import BookingButton from "./BookingButton.jsx";
import Feedback from "./feedback.jsx";

const SharerPublicProfilePage = () => {
  const { sharerId } = useParams();

  const {
    data: sharer,
    isLoading,
    error,
  } = useSharerPublicProfile(sharerId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Failed to load profile</Typography>;
  }

  return (
    <>
      <div style={profile_header.container}>
        <Typography variant="h6" component="div" sx={profile_header.role}>
          {sharer.role}
        </Typography>
        <Typography variant="body1" component="div" sx={profile_header.username}>
          {sharer.username}
        </Typography>
      </div>

      <TipButton sharerId={sharerId} />
      <BookingButton sharerId={sharerId} />
      

      <Box sx={PublicProfileStyles.container}>
        <Box p={3} sx={{ width: "100%" }}>
          <Box sx={PublicProfileStyles.grid}>
            <Box sx={PublicProfileStyles.item}>
              <Typography sx={PublicProfileStyles.label}>
                Contact Method
              </Typography>
              <Typography sx={PublicProfileStyles.value}>
                {sharer.contact_method || "N/A"}
              </Typography>
            </Box>

            <Box sx={PublicProfileStyles.item}>
              <Typography sx={PublicProfileStyles.label}>
                Contact Info
              </Typography>
              <Typography sx={PublicProfileStyles.value}>
                {sharer.contact_info || "N/A"}
              </Typography>
            </Box>

            <Box sx={PublicProfileStyles.item}>
              <Typography sx={PublicProfileStyles.label}>
                Social Media Method
              </Typography>
              <Typography sx={PublicProfileStyles.value}>
                {sharer.social_media_method || "N/A"}
              </Typography>
            </Box>

            <Box sx={PublicProfileStyles.item}>
              <Typography sx={PublicProfileStyles.label}>
                Social Media Username
              </Typography>
              <Typography sx={PublicProfileStyles.value}>
                {sharer.social_media_username
                  ? `${sharer.social_media_username}`
                  : "N/A"}
              </Typography>
            </Box>
          </Box>
          <Feedback sharerId={sharerId} />
        </Box>
      </Box>
    </>
  );
};

export default SharerPublicProfilePage;