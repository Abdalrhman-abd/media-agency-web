import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(3, { message: 'الاسم الكامل يجب ألا يقل عن 3 أحرف' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صالح' }),
  phone: z.string().regex(/^[0-9]+$/, { message: 'رقم الهاتف يجب أن يتكون من أرقام فقط' }).min(9, { message: 'رقم الهاتف قصير جداً' }),
  service: z.string().min(1, { message: 'يرجى اختيار الخدمة المطلوبة' }),
  date: z.string().min(1, { message: 'يرجى اختيار التاريخ' }),
  meetingType: z.enum(['online', 'in-person'], { message: 'يرجى تحديد طريقة الاجتماع' }),
  description: z
    .string()
    .min(1, { message: 'الوصف مطلوب' })
    .max(100, { message: 'الوصف يجب ألا يتجاوز 100 حرف' }),
});

export type BookingForm = z.infer<typeof bookingSchema>;

