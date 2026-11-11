import { apiClient } from '../../../shared/api/client';
import { ApiSuccess } from '../../../shared/types/api';

// واجهة تفاصيل المشروع (مطابقة لـ Swagger/Postman)
export interface ProjectDetails {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  clientName?: string;
  externalUrl?: string;
  category: {
    id: string;
    slug: string;
    name: string;
  };
  cover: any; // أو MediaRef إذا كانت معرفة لديك
  gallery: any[];
  tags: string[];
  isFeatured: boolean;
  projectDate?: string;
  publishedAt: string;
}

export const getProjectBySlug = async (slug: string): Promise<ProjectDetails> => {
  const response = await apiClient.get<ApiSuccess<ProjectDetails>>(`/projects/${slug}`);
  return response.data.data;
};