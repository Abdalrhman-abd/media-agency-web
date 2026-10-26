import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || 'https://api.media-agency.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Accept-Language': 'ar', // دعم واجهة الموقع العربية
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // إرفاق التوكن لو وجد للمستقبل
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // معالجة مركزية للأخطاء (Validation, Server Errors)
    if (error.response?.status === 422) {
      console.error('Validation Error:', error.response.data);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
