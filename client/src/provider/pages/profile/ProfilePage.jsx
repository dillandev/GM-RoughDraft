import ProviderNavbar from "../../widgets/navbar/navbar.jsx"
import UserInfo from "../../utils/profile/profile_header.jsx"
import ProviderFeedback from "../../components/profile/feedback.jsx"


const ProviderProfile = () => (
    <div>
      <div style={{ border: "1px solid #e0e0e0" }}>
        <ProviderNavbar />
      </div>
      <UserInfo />
      <ProviderFeedback />
    </div>  
);

export default ProviderProfile;