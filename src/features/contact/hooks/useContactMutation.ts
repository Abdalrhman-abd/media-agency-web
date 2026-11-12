import { useMutation } from '@tanstack/react-query';

import { sendContactMessage } from '../api/contactApi';

import type {
  ContactPayload,
  ContactResponse,
} from '../types/contact.types';

// البيانات المطلوبة لإرسال الرسالة
interface SendContactVariables {
  payload: ContactPayload;
  recaptchaToken: string;
}

// إدارة عملية إرسال رسالة التواصل
export const useContactMutation = () => {
  return useMutation<
    ContactResponse,
    Error,
    SendContactVariables
  >({
    mutationFn: ({ payload, recaptchaToken }) =>
      sendContactMessage(payload, recaptchaToken),
  });
};