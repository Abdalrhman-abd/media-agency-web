
export type ProjectCategory = 'creative' | 'ads' | 'print';

export type PortfolioCategory = 'all' | ProjectCategory;


export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  image: string;
  icon: string;
}