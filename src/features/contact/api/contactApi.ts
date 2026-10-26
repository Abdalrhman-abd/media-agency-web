import apiClient from '../../../services/apiClient';
import { ContactPayload, ContactResponse } from '../types/contact.types';

export const sendContactMessage = async (
  payload: ContactPayload,
): Promise<ContactResponse> => {
  const response = await apiClient.post<ContactResponse>('/contact', payload);
  return response.data;
};
