import { useQuery } from '@tanstack/react-query';
import { fetchSharerFeedback } from '../../services/getProfiledata/feedbackService.jsx';

export const useFeedback = () => {
  return useQuery({
    queryKey: ['sharerFeedback'],
    queryFn: fetchSharerFeedback,
  });
};