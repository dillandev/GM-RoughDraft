import { useQuery } from '@tanstack/react-query';
import { fetchPublicProviderFeedback } from '../../services/public_profile/feedbackServices.jsx';

export const useProviderFeedback = (providerId) => {
  return useQuery({
    queryKey: ['publicProviderFeedback', providerId],
    queryFn: () => fetchPublicProviderFeedback(providerId),
    enabled: !!providerId, // Only fetch if providerId exists
  });
};