export type PortfolioCategory = 'all' | 'creative_design' | 'prints' | 'ads';


import type { MediaRef } from "../../../shared/types/media";

export interface ProjectCategory {
  id: string;
  slug: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  cover: MediaRef | null;
  tags: string[];
  isFeatured: boolean;
  projectDate: string;
  publishedAt: string;
}

export interface ProjectsMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ProjectsResponse {
  success: boolean;
  data: Project[];
  meta: ProjectsMeta;
}