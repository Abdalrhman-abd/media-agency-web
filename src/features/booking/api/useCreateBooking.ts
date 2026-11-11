// نستخدم هنا useMutation للتعامل مع الإرسال، وحالات التحميل، والنجاح، والأخطاء:

import { useMutation } from '@tanstack/react-query';
import { bookingApi } from './bookingApi';
import { BookingPayload, BookingResponse } from '../types/booking.types';

// توحيد اسم الواجهة لتجنب الأخطاء
interface UseCreateBookingProps {
  onSuccess?: (data: BookingResponse) => void;
  onError?: (error: any) => void;
}

export const useCreateBooking = ({ onSuccess, onError }: UseCreateBookingProps = {}) => {
  return useMutation({
    mutationFn: ({ data, token }: { data: BookingPayload; token: string }) =>
      bookingApi.createBooking(data, token), // استدعاء الدالة من داخل الكائن بالشكل الصحيح
    onSuccess,
    onError,
  });
};