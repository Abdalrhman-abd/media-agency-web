// استيراد API Client
import { apiClient } from '../../../shared/api/client';

// استيراد أنواع البيانات
import type {
  ContactPayload,
  ContactResponse,
} from '../types/contact.types';

// إرسال رسالة التواصل إلى Backend
export const sendContactMessage = async (
  payload: ContactPayload,
  recaptchaToken: string,
): Promise<ContactResponse> => {

  // إرسال طلب POST
  const response = await apiClient.post<ContactResponse>(
    '/contact',
    payload,
    {
      headers: {
        'X-Recaptcha-Token': recaptchaToken,
      },
    },
  );

  // إرجاع استجابة السيرفر
  return response.data;
};