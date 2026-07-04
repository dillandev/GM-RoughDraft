import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMyAdsService, deleteAdService } from '../../../services/ads/myAds/myAdsService.jsx'; 

export const useMyAds = () => {
  const queryClient = useQueryClient();

  // Fetch ads
  const adsQuery = useQuery({
    queryKey: ['sharer','myAds'],
    queryFn: getMyAdsService,
  });

  // Delete ad and refresh list
  const deleteAdMutation = useMutation({
    mutationFn: deleteAdService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sharer','myAds'] });
    },
  });

  return { adsQuery, deleteAdMutation };
};