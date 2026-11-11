import { apiClient } from '../../../shared/api/client';
import { ApiSuccess } from '../../../shared/types/api';

export const getServices = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/services');
  return response.data.data;
};
