import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookSharerService } from '../../services/public_profile/bookingService.jsx';

export const useBookSharer = (sharerId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => bookSharerService(sharerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    }
  });
};