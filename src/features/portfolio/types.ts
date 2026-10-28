// src/features/portfolio/types.ts

export type ProjectCategory = 'creative' | 'ads' | 'print';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  image: string;
  icon: string;
}