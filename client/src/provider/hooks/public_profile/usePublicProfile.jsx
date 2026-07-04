import { useQuery } from "@tanstack/react-query";
import { getProviderPublicProfile } from "../../services/public_profile/publicProfileService.jsx";

export const useProviderPublicProfile = (providerId) => {
  return useQuery({
    queryKey: ["provider-profile", providerId],
    queryFn: () => getProviderPublicProfile(providerId),
    enabled: !!providerId,
  });
};