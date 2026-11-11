import { useQuery } from '@tanstack/react-query';
import { getProjects } from './getProjects';

interface UseProjectsParams {
  page?: number;
  limit?: number;
  category?: string;
  featured?: boolean;
  search?: string;
}

export const useProjects = (params?: UseProjectsParams) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: () => getProjects(params),
  });
};