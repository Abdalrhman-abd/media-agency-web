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

// 1. استدعاء ملفات الـ API والـ Hooks الخاصة بالخدمات والحجز
import { useServices } from '../../services/api/useServices.ts';
import { useCreateBooking } from '../api/useCreateBooking'; // استدعاء الهوك الخاص بالحجز
import { useRecaptcha } from '../../../shared/hooks/useRecaptcha.ts'; // هوك الكابتشا (تأكد من مساره الصحيح)

export const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  // 2. جلب الخدمات الحقيقية من السيرفر
  const { data: servicesData, isLoading: isLoadingServices } = useServices();
  const servicesList = Array.isArray(servicesData)
    ? servicesData
    : (servicesData as any)?.data || [];

  // 3. تفعيل خدمة الـ reCAPTCHA
  const { getToken } = useRecaptcha();

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

  // 4. استدعاء هوك إرسال الحجز (useCreateBooking) والتعامل مع حالات النجاح والأخطاء
  const { mutate: submitBooking, isPending } = useCreateBooking({
    onSuccess: (response) => {
      setBookingReference(response.bookingId || 'نجاح');
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      console.error(
        "FULL BOOKING ERROR:",
        JSON.stringify(error, null, 2)
      );

      console.error("ERROR CODE:", error?.error?.code);
      console.error("ERROR MESSAGE:", error?.error?.message);

      alert(
        error?.error?.message ||
        'حدث خطأ أثناء الحجز'
      );
    },
  });

  const onSubmit = async (data: BookingForm) => {
    console.log("بيانات الحجز:", data);

    try {

      const recaptchaToken = await getToken('booking');
      // نطلب رمز التحقق من Google.
      if (!recaptchaToken) {
        alert("فشل التحقق الأمني، يرجى المحاولة مرة أخرى");
        return;
      }

      console.log("CAPTCHA Token generated successfully");

      // إرسال الحجز
      submitBooking({
        data: {
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          serviceId: data.serviceId,
          date: data.date,
          time: data.time,
          meetingType: data.meetingType.toUpperCase() as
            'ONLINE' | 'IN_PERSON',
          description: data.description,
        },
        token: recaptchaToken,
      });

    } catch (err) {
      console.error("Submission error:", err);
      alert("تعذر إكمال التحقق الأمني، يرجى المحاولة مرة أخرى");
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

          <form
            onSubmit={handleSubmit(
              onSubmit,
              (errors) => console.log("❌ أخطاء تمنع الإرسال:", errors)
            )}
            className="w-full bg-no-repeat bg-contain bg-center py-8 sm:py-16 px-4 sm:px-8 lg:px-0 rounded-2xl box-border"
            noValidate
            style={{ backgroundImage: `url(${BookingImage})` }}
          >
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
                    value: service.id, // ربط معرف الخدمة الحقيقي
                    label: service.title,
                  }))}
                  {...register('serviceId')}
                  error={errors.serviceId?.message}
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
            <div className='text-left w-full ml-3'>
              <Button
                type="submit"
                text={isPending ? "جاري الإرسال..." : "تأكيد الحجز"}
                disabled={isPending}
                className="brand-gradient hover:from-blue-700 hover:to-purple-800 text-white w-full sm:w-auto px-8 py-3 disabled:opacity-50"
              />
            </div>
          </form>

        </div>
      </Reveal>
    </div>
  );
};
export default BookingPage;