import { useQuery } from '@tanstack/react-query';
import { getProjectBySlug } from './getProjectBySlug';

export const useProjectBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: () => getProjectBySlug(slug),
    enabled: Boolean(slug), // عدم إرسال الطلب إلا إذا كان الـ slug متوفراً
  });
};