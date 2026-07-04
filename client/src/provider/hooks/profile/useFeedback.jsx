import { useQuery } from '@tanstack/react-query';
import { fetchProviderFeedback } from '../../services/profile/feedbackServices.jsx';

export const useFeedback = () => {
  return useQuery({
    queryKey: ['providerFeedback'],
    queryFn: fetchProviderFeedback,
  });
};