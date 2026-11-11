import { apiClient } from '../../../shared/api/client';
import { ApiSuccess } from '../../../shared/types/api';

export interface Category {
  id: string;
  slug: string;
  name: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await apiClient.get<ApiSuccess<Category[]>>('/categories');
  return response.data.data;
};