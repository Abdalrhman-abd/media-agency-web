export type MeetingType = 'ONLINE' | 'IN_PERSON';
// تجهيز البيانات للارسال3
export interface BookingPayload {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  description: string;
  meetingType: MeetingType;


  countryCode: string;
  jobTitle: string;
  companyName: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId: string;
  message: string;
  
}

export interface AvailableTimesResponse {
  success: boolean;
  data: {
    date: string;
    takenTimes: string[];
  };
}
