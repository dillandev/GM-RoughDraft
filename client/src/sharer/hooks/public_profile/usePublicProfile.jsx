import { useQuery } from "@tanstack/react-query";
import { getSharerPublicProfile } from "../../services/public_profile/publicProfileServices.jsx";

export const useSharerPublicProfile = (sharerId) => {
  return useQuery({
    queryKey: ["sharer-profile", sharerId],
    queryFn: () => getSharerPublicProfile(sharerId),
    enabled: !!sharerId,
  });
};