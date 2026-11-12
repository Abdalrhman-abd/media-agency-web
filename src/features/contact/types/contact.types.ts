import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  message: z.string().min(1, "الرجاء كتابة الرسالة").max(100, "الرسالة يجب ألا تتجاوز 100 حرف"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ContactPayload = ContactFormData;

// إضافة واجهة الاستجابة من السيرفر لحل خطأ الاستيراد
export interface ContactResponse {
  success?: boolean;
  message: string;
  data?: unknown;
}