import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAdService } from '../../../services/ads/createAd/createAdService.jsx';

export const useCreateAd = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAdService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sharer','credits'] });
    }
  });
};