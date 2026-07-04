import UserInfo from "../../utils/profile_header/profile_header.jsx"
import ProfileData from "../../components/getProfiledata/getProfiledata.jsx"
import TipButton from "../../widgets/tip/TipButton.jsx"
import SharerNavbar from "../../widgets/navbar/navbar.jsx"
import SharerFeedback from "../../components/getProfiledata/feedback.jsx"

const Profile = () => (
    <div>
      <div style={{ border: "1px solid #e0e0e0" }}>
        <SharerNavbar />
      </div>
      <UserInfo />
      <TipButton />
      <ProfileData />
      <SharerFeedback />
    </div>  
);

export default Profile;