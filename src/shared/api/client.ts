import axios from 'axios';
import { handleApiError } from './errorHandler';
import type { ApiSuccess, ApiResult } from '../types/api';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// إضافة لغة المستخدم مع كل طلب
apiClient.interceptors.request.use((config) => {
  const savedLang = localStorage.getItem('lang');
  const currentLang = savedLang === 'en' ? 'en' : 'ar';

  config.headers.set('Accept-Language', currentLang);

  return config;
});

// معالجة أخطاء الاستجابة
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = handleApiError(error);

    if (apiError.status === 429) {
      console.warn(
        'تم تجاوز حد الطلبات المسموح. حاول مرة أخرى لاحقاً.'
      );
    }

    return Promise.reject(apiError);
  }
);

// GET Helper
export async function apiGet<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<ApiResult<T>> {
  const response = await apiClient.get<ApiSuccess<T>>(url, { params });

  return {
    data: response.data.data,
    meta: response.data.meta,
  };
}