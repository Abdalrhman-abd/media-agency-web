import { AxiosError } from 'axios';
import { ApiErrorBody } from '../types/api';

export const handleApiError = (error: unknown): ApiErrorBody => {
  if (error && typeof error === 'object' && 'isAxiosError' in error) {
    const axiosError = error as AxiosError<ApiErrorBody>;
    
    if (axiosError.response && axiosError.response.data) {
      // إرجاع جسم الخطأ القادم من السيرفر بالهيكل المعياري
      return axiosError.response.data;
    }
  }

  // خطأ شبكة عام أو خطأ غير متوقع
  return {
    success: false,
    error: {
      code: 'NETWORK_OR_UNKNOWN_ERROR',
      message: 'فشل الاتصال بالخادم، يرجى التحقق من اتصال الإنترنت.',
    },
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };
};