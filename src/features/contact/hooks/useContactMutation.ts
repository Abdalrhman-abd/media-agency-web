import { useMutation } from '@tanstack/react-query';
import { sendContactMessage } from '../api/contactApi';
import type { ContactPayload } from '../types/contact.types';

export const useContactMutation = (
  onSuccessCallback?: () => void,
  onErrorCallback?: (errorMsg: string) => void
) => {
  return useMutation({
    mutationFn: (payload: ContactPayload) => sendContactMessage(payload),
    onSuccess: () => {
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (error: any) => {
      let message = 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.';
      
      if (!error.response) {
        message = 'فشل الاتصال بالشبكة، تحقق من اتصالك بالإنترنت.';
      } else if (error.response?.data?.message) {
        message = error.response.data.message;
      }

      if (onErrorCallback) onErrorCallback(message);
    },
  });
};