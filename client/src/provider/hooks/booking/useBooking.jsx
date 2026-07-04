import { useQuery } from '@tanstack/react-query';
import { fetchProviderBookings } from '../../services/booking/bookingService.jsx';

export const useProviderBookings = () => {
  return useQuery({
    queryKey: ['provider','providerBookings'],
    queryFn: fetchProviderBookings,
  });
};