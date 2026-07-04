import SharerNavbar from "../../widgets/navbar/navbar.jsx"
import SharerReviewList from '../../components/review/reviewList.jsx';

const SharerReviewPage = () => (
    <div>
        <div style={{ border: "1px solid #e0e0e0" }}>
          <SharerNavbar />
        </div>
        <SharerReviewList />

    </div>  
);

export default SharerReviewPage;