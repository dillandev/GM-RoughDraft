import ProviderNavbar from "../../widgets/navbar/navbar.jsx"
import { AdDirectory } from "../../components/search_ads/AdDirectory.jsx"

const ProviderSearchAds = () => (
    <div>
        <div style={{ border: "1px solid #e0e0e0" }}>
          <ProviderNavbar />
        </div>
        <AdDirectory />

    </div>  
);

export default ProviderSearchAds;