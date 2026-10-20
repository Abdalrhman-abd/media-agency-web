import apiClient from '../../../services/apiClient';
import { PortfolioResponse, PortfolioCategory } from '../types/portfolio.types';

export const getProjects = async (category: PortfolioCategory = 'all', page: number = 1): Promise<PortfolioResponse> => {
  const response = await apiClient.get<PortfolioResponse>('/portfolio', {
    params: { category, page },
  });
  return response.data;
};