import apiClient from '../../../services/apiClient';
import { ServiceGroup } from '../types/services.types';

export const getServices = async (): Promise<ServiceGroup[]> => {
  const response = await apiClient.get<ServiceGroup[]>('/services');
  return response.data;
};