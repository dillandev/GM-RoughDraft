import UserInfo from "../../utils/profile_header/profile_header.jsx"
import InputBoxes from "../../components/editProfile/inputboxes.jsx"
import SharerNavbar from "../../widgets/navbar/navbar.jsx"

const EditProfile = () => (
    <div>
      <div style={{ border: "1px solid #e0e0e0" }}>
        <SharerNavbar />
      </div>
      <UserInfo />
      <div style={{ marginTop: "30px" }}> 
        <InputBoxes /> 
      </div>
    </div>  
);

export default EditProfile;