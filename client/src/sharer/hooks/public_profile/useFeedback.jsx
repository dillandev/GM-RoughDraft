import { useQuery } from '@tanstack/react-query';
import { fetchPublicSharerFeedback } from '../../services/public_profile/feedbackServices.jsx';

export const usePublicFeedback = (sharerId) => {
  return useQuery({
    queryKey: ['publicSharerFeedback', sharerId],
    queryFn: () => fetchPublicSharerFeedback(sharerId),
    enabled: !!sharerId, // Only fetch if sharerId exists
  });
};