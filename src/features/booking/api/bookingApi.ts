
import { apiClient } from '../../../shared/api/client';
import { BookingPayload, BookingResponse, AvailableTimesResponse } from '../types/booking.types';

export const bookingApi = {
  createBooking: async (data: BookingPayload, recaptchaToken: string): Promise<BookingResponse> => {
    const response = await apiClient.post<BookingResponse>('/bookings', data, {
      headers: { 'X-Recaptcha-Token': recaptchaToken },
    });
    return response.data;
  },

  getAvailability: async (date: string): Promise<string[]> => {
    const response = await apiClient.get<AvailableTimesResponse>('bookings/availability', {
      params: { date },
    });
    return response.data.data.takenTimes || [];
  },
};
