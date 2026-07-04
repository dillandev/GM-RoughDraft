import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAcceptedBookings, submitSharerReview } from '../../services/review/reviewService.jsx';

export const useAcceptedBookings = () => {
  return useQuery({
    queryKey: ['sharer', 'acceptedBookings'],
    queryFn: fetchAcceptedBookings,
  });
};

export const useCreateReview = (onSuccessCallback, onErrorCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitSharerReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['sharer', 'acceptedBookings'] });
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      if (onErrorCallback) onErrorCallback(error);
    },
  });
};