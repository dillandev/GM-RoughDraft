// useSearchAds.js
import { useQuery } from '@tanstack/react-query';
import { searchAds } from '../../services/search_ads/adService.jsx';

export const useSearchAds = (queryTerm) => {
  return useQuery({
    queryKey: ['ads', queryTerm],
    queryFn: () => searchAds(queryTerm),
    enabled: !!queryTerm, // Only runs query when input text/dropdown has a value
    retry: 1,
  });
};