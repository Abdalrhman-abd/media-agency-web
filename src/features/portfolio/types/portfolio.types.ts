export type PortfolioCategory = 'all' | 'creative_design' | 'prints' | 'ads';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryKey: PortfolioCategory;
  thumbnailUrl: string;
  slug: string;
}

export interface PortfolioResponse {
  data: ProjectItem[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}