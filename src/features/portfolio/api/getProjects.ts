import { apiClient } from '../../../shared/api/client';
import { ApiSuccess } from '../../../shared/types/api';

export interface ProjectCard {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: {
    id: string;
    slug: string;
    name: string;
  };
  cover: any;
  tags: string[];
  isFeatured: boolean;
  projectDate?: string;
  publishedAt: string;
}

export interface ProjectsResponse {
  items: ProjectCard[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface GetProjectsParams {
  page?: number;
  limit?: number;
  category?: string;
  featured?: boolean;
  search?: string;
}

export const getProjects = async (params?: GetProjectsParams): Promise<ProjectsResponse> => {
  const response = await apiClient.get<ApiSuccess<ProjectsResponse>>('/projects', {
    params,
  });
  return response.data.data;
};