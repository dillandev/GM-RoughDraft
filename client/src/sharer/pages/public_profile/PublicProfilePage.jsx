import Navbar from "../../../provider/widgets/navbar/navbar.jsx"
import SharerPublicProfilePage from "../../components/public_profile/publicProfile.jsx"

const PublicProfilePage = () => (
    <div>
        <div style={{ border: "1px solid #e0e0e0" }}>
          <Navbar />
        </div>
        <SharerPublicProfilePage />

    </div>  
);

export default PublicProfilePage;