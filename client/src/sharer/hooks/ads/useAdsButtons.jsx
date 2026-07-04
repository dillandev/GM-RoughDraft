import { useNavigate } from "react-router-dom";

export function useAdButtons() {
  const navigate = useNavigate();

  const goToCreateAds = () => navigate("/sharer/dashboard/create_ad");
  const goToMyAds = () => navigate("/sharer/dashboard/my_ads");
  

  return {
    goToCreateAds,
    goToMyAds,
  };
}