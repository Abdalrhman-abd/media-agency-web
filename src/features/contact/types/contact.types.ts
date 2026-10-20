export interface ContactPayload {
  fullName: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}