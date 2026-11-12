//  شكل الاستجابة الناجحة.
 export interface ApiSuccess<T> {
  success: true;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
// : شكل أخطاء الحقول، مثل خطأ البريد الإلكتروني.
export interface ApiErrorDetail {
  field: string;
  errors: string[];
}
// شكل الخطأ القادم من السيرفر.
export interface ApiErrorBody {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  path: string;
  timestamp: string;
  requestId?: string;
}
// شكل بيانات الصور والفيديوهات والملفات.
export interface MediaRef {
  id: string;
  url: string;
  type: 'IMAGE' | 'VIDEO' | 'DOCUMENT';
  width: number | null;
  height: number | null;
  alt: string | null;
}
// شكل النتيجة التي ترجعها دالة apiGet
export interface ApiResult<T> {
  data: T;
  meta?: ApiSuccess<T>['meta'];
}