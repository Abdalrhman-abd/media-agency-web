import axios from 'axios';
import { ApiError } from './ApiError';
import type { ApiErrorBody, ApiErrorDetail } from '../types/api';

export const handleApiError = (error: unknown): ApiError => {
// Network Error
if (axios.isAxiosError(error) && !error.response) {
return new ApiError({
code: 'NETWORK_ERROR',
message: 'فشل الاتصال بالخادم، يرجى التحقق من اتصال الإنترنت.',
isNetworkError: true,
});
}

// Backend Error
if (axios.isAxiosError<ApiErrorBody>(error)) {
const response = error.response;
const errorBody = response?.data?.error;

const fieldErrors: Record<string, string[]> = {};
const details = errorBody?.details;

if (Array.isArray(details)) {
  for (const detail of details as ApiErrorDetail[]) {
    if (
      detail &&
      typeof detail.field === 'string' &&
      Array.isArray(detail.errors)
    ) {
      fieldErrors[detail.field] = detail.errors;
    }
  }
}

return new ApiError({
  status: response?.status ?? null,
  code: errorBody?.code ?? 'UNKNOWN_ERROR',
  message: errorBody?.message ?? 'حدث خطأ غير متوقع.',
  fieldErrors,
  requestId: response?.data?.requestId,
});

}

// Unknown Error
return new ApiError({
code: 'UNKNOWN_ERROR',
message: 'حدث خطأ غير متوقع.',
});
};