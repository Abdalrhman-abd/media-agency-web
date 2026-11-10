import axios from 'axios';
import { handleApiError } from './errorHandler';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// إضافة ترويسة اللغة تلقائياً مع كل طلب بناءً على اختيار المستخدم (افتراضياً ar)
apiClient.interceptors.request.use((config) => {
  const currentLang = localStorage.getItem('lang') || 'ar';
  config.headers['Accept-Language'] = currentLang;
  return config;
});

// معالجة الأخطاء الاستباقية في الـ Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorBody = handleApiError(error);
    
    // التعامل مع الحالات الخاصة (مثل 429 كثرة الطلبات أو 5xx أخطاء السيرفر)
    if (error.response?.status === 429) {
      console.warn('تم تجاوز حد الطلبات المسموح (Rate Limit). حاول مرة أخرى لاحقاً.');
    }

    return Promise.reject(errorBody);
  }
);