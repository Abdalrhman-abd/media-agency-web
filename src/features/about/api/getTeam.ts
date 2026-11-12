import { apiGet } from '../../../shared/api/client';
import type { TeamMember } from '../types/about.types';

export const getTeam = async (): Promise<TeamMember[]> => {
  const response = await apiGet<TeamMember[]>('/team');

  return response.data;
};