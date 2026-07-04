import { useNavigate } from "react-router-dom";

export function useDashbuttons() {
  const navigate = useNavigate();

  const goToSharerProfile = () => navigate("/sharer/dashboard/sharer_profile");
  const goToSharerAds = () => navigate("/sharer/dashboard/sharer_ads");
  const goToSharerClientele = () => navigate("/sharer/dashboard/sharer_clientele");
  const goToSharerReview = () => navigate("/sharer/dashboard/sharer_review");

  return {
    goToSharerProfile,
    goToSharerAds,
    goToSharerClientele,
    goToSharerReview,
  };
}