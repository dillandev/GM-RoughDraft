import { useQuery } from "@tanstack/react-query";
import { getSharerProfileData } from "../../services/getProfiledata/getProfileDataService.jsx";

export const useSharerProfileData = () => {
  return useQuery({
    queryKey: ['sharer','profiledata'],
    queryFn: getSharerProfileData,
  });
};