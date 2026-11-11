import { useQuery } from '@tanstack/react-query';
import { getServices } from './getServices';

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: () => getServices(),
  });
};