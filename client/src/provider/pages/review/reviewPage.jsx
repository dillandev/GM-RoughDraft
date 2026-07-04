import ProviderNavbar from "../../widgets/navbar/navbar.jsx"
import ProviderReviewList from '../../components/review/reviewList.jsx';

const ReviewPage = () => (
    <div>
        <div style={{ border: "1px solid #e0e0e0" }}>
          <ProviderNavbar />
        </div>
        <ProviderReviewList />

    </div>  
);

export default ReviewPage;