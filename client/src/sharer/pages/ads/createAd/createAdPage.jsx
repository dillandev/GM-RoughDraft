import SharerNavbar from "../../../widgets/navbar/navbar.jsx"
import SharerCreateAd  from "../../../components/ads/createAd/createAd.jsx"

const CreateAd = () => (
    <div>
      <div style={{ border: "1px solid #e0e0e0" }}>
        <SharerNavbar />
      </div>
      <SharerCreateAd />

    </div>  
);

export default CreateAd;