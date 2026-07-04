import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAcceptedBookings, submitProviderReview } from '../../services/review/reviewService.jsx';

export const useAcceptedBookings = () => {
  return useQuery({
    queryKey: ['provider', 'acceptedBookings'],
    queryFn: fetchAcceptedBookings,
  });
};

export const useCreateReview = (onSuccessCallback, onErrorCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitProviderReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['provider', 'acceptedBookings'] });
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      if (onErrorCallback) onErrorCallback(error);
    },
  });
};