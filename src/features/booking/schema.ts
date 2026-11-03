import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(3, { message: 'الاسم الكامل يجب ألا يقل عن 3 أحرف' }),
  jobTitle: z.string().min(2, { message: 'يرجى إدخال المسمى الوظيفي' }),
  companyName: z.string().min(2, { message: 'يرجى إدخال اسم الشركة' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صالح' }),
  phone: z.string().regex(/^[0-9]+$/, { message: 'رقم الهاتف يجب أن يتكون من أرقام فقط' }).min(9, { message: 'رقم الهاتف قصير جداً' }),
  service: z.string().min(1, { message: 'يرجى اختيار الخدمة المطلوبة' }),
  date: z.string().min(1, { message: 'يرجى اختيار التاريخ' }),
  time: z.string().min(1, 'الوقت مطلوب'),
  meetingType: z.enum(['online', 'in-person'], { message: 'يرجى تحديد طريقة الاجتماع' }),
  description: z
    .string()
    .min(1, { message: 'الوصف مطلوب' })
    .max(100, { message: 'الوصف يجب ألا يتجاوز 100 حرف' }),
});

export type BookingForm = z.infer<typeof bookingSchema>;

