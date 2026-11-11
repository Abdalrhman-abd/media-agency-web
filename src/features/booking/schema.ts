import { z } from 'zod';
// تحقق من صحه البيانات 1
export const bookingSchema = z.object({
  fullName: z.string().min(3, { message: 'الاسم الكامل يجب ألا يقل عن 3 أحرف' }),
  jobTitle: z.string().min(2, { message: 'يرجى إدخال المسمى الوظيفي' }),
  companyName: z.string().min(2, { message: 'يرجى إدخال اسم الشركة' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صالح' }),
  phone: z.string().regex(/^[0-9]+$/, { message: 'رقم الهاتف يجب أن يتكون من أرقام فقط' }).min(9, { message: 'رقم الهاتف قصير جداً' }),
  serviceId: z.string().min(1, { message: 'يرجى اختيار الخدمة المطلوبة' }),
  date: z.string().min(1, { message: 'يرجى اختيار التاريخ' }),
  time: z.string().min(1, 'الوقت مطلوب'),
meetingType: z.enum(['ONLINE', 'IN_PERSON'], {
  message: 'يرجى تحديد طريقة الاجتماع'
}),
countryCode: z.string().min(1, {
  message: 'يرجى اختيار رمز الدولة'
}),
  description: z
    .string()
    .min(1, { message: 'الوصف مطلوب' })
    .max(100, { message: 'الوصف يجب ألا يتجاوز 100 حرف' }),
});
// يحدد نوع بيانات من الفورم2
export type BookingForm = z.infer<typeof bookingSchema>;

