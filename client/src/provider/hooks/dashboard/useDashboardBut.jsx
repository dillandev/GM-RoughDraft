import { useNavigate } from "react-router-dom";

export function useDashbuttons() {
  const navigate = useNavigate();

  const goToProviderProfile = () => navigate("/provider/dashboard/provider_profile");
  const goToProviderSearchAds = () => navigate("/provider/dashboard/provider_search_ads");
  const goToProviderBooking = () => navigate("/provider/dashboard/provider_bookings");
  const goToProviderReview = () => navigate("/provider/dashboard/provider_review");

  return {
    goToProviderProfile,
    goToProviderSearchAds,
    goToProviderBooking,
    goToProviderReview,
  };
}