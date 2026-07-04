import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchClientele, updateBookingStatus } from '../../services/clientele/clienteleService.jsx';

export const useClientele = () => {
  const queryClient = useQueryClient();

  const clienteleQuery = useQuery({
    queryKey: ['sharer','clientele'],
    queryFn: fetchClientele,
  });

  const actionMutation = useMutation({
    mutationFn: updateBookingStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sharer','clientele'] });
    },
  });

  return {
    clientele: clienteleQuery.data || [],
    isLoading: clienteleQuery.isLoading,
    handleAction: actionMutation.mutate,
  };
};