// src/types/api.ts (أو ملف الأنواع الخاص بك)

export interface MediaRef {
  id: string;
  url: string;
  type: 'IMAGE' | 'VIDEO' | 'DOCUMENT';
  width: number | null;
  height: number | null;
  alt: string | null;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  features: string[];
  icon: MediaRef | null;
  cover: MediaRef | null;
}

export interface ServicesResponse {
  success: boolean;
  data: ServiceItem[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}