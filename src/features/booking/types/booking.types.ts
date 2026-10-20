export type MeetingType = 'in_office' | 'online';

export interface BookingPayload {
  fullName: string;
  jobTitle: string;
  companyName: string;
  phone: string;
  countryCode: string; // مثل +963
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: MeetingType;
  projectDescription: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId: string;
  message: string;
}