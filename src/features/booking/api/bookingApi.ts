import apiClient from '../../../services/apiClient';
import { BookingPayload, BookingResponse } from '../types/booking.types';

export const submitBooking = async (payload: BookingPayload): Promise<BookingResponse> => {
  const response = await apiClient.post<BookingResponse>('/bookings', payload);
  return response.data;
};