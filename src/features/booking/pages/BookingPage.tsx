import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, BookingForm } from '../schema.ts';
import { Input } from '../../forms/Input.tsx';
import { DateField } from '../../forms/DateField.tsx';
import { PhoneField } from '../../forms/PhoneField.tsx';
import { Select } from '../../forms/Select.tsx';
import { Textarea } from '../../forms/Textarea.tsx';
import { MeetingTypeRadio } from '../components/MeetingTypeRadio.tsx';
import { SuccessCard } from '../components/SuccessCard.tsx';
import SectionTitle from '../../../components/ui/SectionTitle';
import BookingImage from '../../../assets/images/Bookingimage.png';
import Button from '../../../components/ui/Button.tsx';
import SectionHero from '../../../components/ui/SectionHero.tsx';
import { Reveal } from '../../../components/ui/Reveal.tsx';

// الإضافات الخاصة بالربط مع الباك إند
import { useServices } from '../../services/api/useServices'; // جلب الخدمات الحقيقية
import { useCreateBooking } from '../api/useCreateBooking'; // هوك إرسال الحجز
import { useRecaptcha } from '../../../shared/'; // هوك الكابتشا (تأكد من مساره الصحيح لديك)

export const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState<string>(''); // لعرض رقم المرجع الحقيقي

  // 1. جلب الخدمات الحقيقية من السيرفر
  const { data: servicesData, isLoading: isLoadingServices } = useServices();
  const servicesList = Array.isArray(servicesData) ? servicesData : (servicesData as any)?.data || [];

  // 2. تفعيل خدمة الـ reCAPTCHA
  const { executeRecaptcha } = useRecaptcha();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      meetingType: 'ONLINE',
    },
  });

  // 3. إعداد الـ Mutation للإرسال مع التعامل مع الأخطاء والقادم من الباك
  const { mutate: submitBooking, isPending } = useCreateBooking({
    onSuccess: (response) => {
      // حفظ رقم المرجع القادم من السيرفر (مثل MD-4F7K2Q)
      setBookingReference(response.bookingId || 'نجاح');
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      const status = error?.response?.status;
      const serverData = error?.response?.data;

      if (status === 400 && serverData?.fieldErrors) {
        // خطأ 400: ربط الأخطاء بالحقول المقابلة عبر setError
        Object.keys(serverData.fieldErrors).forEach((field) => {
          setError(field as any, {
            type: 'server',
            message: serverData.fieldErrors[field],
          });
        });
      } else if (status === 409) {
        alert('هذا الوقت تم حجزه للتو، يرجى اختيار وقت آخر.');
      } else if (status === 422) {
        alert(serverData?.message || 'مخالفة لقواعد الحجز.');
      } else if (status === 429) {
        alert('محاولات كثيرة جداً، حاول لاحقاً.');
      } else {
        alert('حدث خطأ غير متوقع، يرجى التحقق من الاتصال بالإنترنت.');
      }
    },
  });

  const onSubmit = async (data: BookingForm) => {
    try {
      // الحصول على رمز reCAPTCHA الحقيقي قبل الإرسال
      const recaptchaToken = await executeRecaptcha('booking');

      // إرسال البيانات والتوكن للباك إند
      submitBooking({
        data: {
          fullName: data.fullName,
          jobTitle: data.jobTitle,
          companyName: data.companyName,
          phone: data.phone,
          email: data.email,
          serviceId: data.service, // معرف الخدمة الحقيقي
          date: data.date,
          time: data.time,
          meetingType: data.meetingType as 'ONLINE' | 'IN_PERSON',
          description: data.description,
        },
        token: recaptchaToken || '',
      });
    } catch (err) {
      console.error('Recaptcha error:', err);
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SuccessCard reference={bookingReference} onReset={handleReset} />;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Reveal direction="up" delay={0.1}>
        <div className='flex justify-center items-center w-full'>
          <SectionHero title='احجز الآن' subtitle='دعنا نخطط لنجاحك. املأ النموذج وسيتواصل معك خبراؤنا لتحديد موعد جلستك الاستشارية' variant='stacked' className="brand-gradient py-20 w-full" />
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dir-rtl box-border lg:py-24 py-5">
          <div className='mb-6 w-full text-right'>
            <SectionTitle title='احجز استشارتك' />
            <h2 className="text-lg font-bold text-black mt-6">البيانات الشخصية</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-no-repeat bg-contain bg-center py-8 sm:py-16 px-4 sm:px-8 lg:px-0 rounded-2xl box-border" noValidate style={{ backgroundImage: `url(${BookingImage})` }}>
            <div className="space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <Input
                  label="الاسم الكامل"
                  required
                  placeholder="الاسم الكامل"
                  {...register('fullName')}
                  error={errors.fullName?.message}
                />
                <Input
                  label="المسمى الوظيفي"
                  required
                  placeholder="المسمى الوظيفي"
                  {...register('jobTitle')}
                  error={errors.jobTitle?.message}
                />
                <Input
                  label="اسم الشركة"
                  required
                  placeholder="اسم الشركة"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                />
                <PhoneField
                  label="رقم الهاتف / الواتساب"
                  required
                  placeholder="أدخل رقم الهاتف"
                  {...register('phone')}
                  error={errors.phone?.message}
                />
              </div>
              <Input
                label="البريد الإلكتروني"
                type="email"
                required
                placeholder="ex. email@domain.com"
                {...register('email')}
                error={errors.email?.message}
              />

              <h2 className="text-lg font-bold text-gray-800 p-3">تفاصيل الطلب</h2>
              <div className="w-full">
                <Select
                  label="نوع الخدمة"
                  required
                  disabled={isLoadingServices}
                  options={servicesList.map((service: any) => ({
                    value: service.id, // إرسال الـ ID الحقيقي للخدمة
                    label: service.title,
                  }))}
                  {...register('service')}
                  error={errors.service?.message}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <DateField
                  label="الوقت المفضل"
                  type="time"
                  required
                  {...register('time')}
                  error={errors.time?.message}
                />
                <DateField
                  label="التاريخ المفضل"
                  required
                  {...register('date')}
                  error={errors.date?.message}
                />
              </div>

            </div>

            <div className="mt-4 w-full">
              <Controller
                name="meetingType"
                control={control}
                render={({ field }) => (
                  <MeetingTypeRadio
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.meetingType?.message}
                  />
                )}
              />
            </div>

            <div className="mt-4 w-full">
              <Textarea
                label="وصف المشروع"
                required
                maxLength={100}
                {...register('description')}
                error={errors.description?.message}
              />
            </div>
          </form>

          <div className='text-left w-full ml-3'>
            <Button
              text={isPending ? "جاري الإرسال..." : "تأكيد الحجز"}
              disabled={isPending}
              onClick={handleSubmit(onSubmit)}
              className="brand-gradient hover:from-blue-700 hover:to-purple-800 text-white w-full sm:w-auto px-8 py-3 disabled:opacity-50"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
};
export default BookingPage;