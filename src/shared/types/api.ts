export interface ApiSuccess<T> {
  success: true;
  data: T;
  meta?: { page: number; limit: number; total: number; totalPages: number };
}

export interface ApiErrorBody {
  success: false;
  error: { code: string; message: string; details?: { field: string; errors: string[] }[] | unknown };
  path: string;
  timestamp: string;
  requestId?: string;
}

export interface MediaRef {
  id: string;
  url: string; // Cloudinary URL
  type: 'IMAGE' | 'VIDEO' | 'DOCUMENT';
  width: number | null;
  height: number | null;
  alt: string | null;
}