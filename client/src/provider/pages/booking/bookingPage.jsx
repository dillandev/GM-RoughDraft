import ProviderNavbar from "../../widgets/navbar/navbar.jsx"
import BookingList from "../../components/booking/bookingList.jsx"



const ProviderBooking = () => (
    <div>
        <div style={{ border: "1px solid #e0e0e0" }}>
          <ProviderNavbar />
        </div>
        <BookingList />

    </div>  
);

export default ProviderBooking;