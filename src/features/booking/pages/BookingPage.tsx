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

export const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      meetingType: 'online',
    },
  });

  const onSubmit = (data: BookingForm) => {
    console.log('بيانات الحجز:', data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SuccessCard onReset={handleReset} />;
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <SectionHero title='احجز الآن' subtitle='دعنا نخطط لنجاحك. املأ النموذج وسيتواصل معك خبراؤنا لتحديد موعد جلستك الاستشارية' variant='stacked' className="brand-gradient py-20" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8 dir-rtl">
        <div className='ml-0 sm:ml-180'>
          <SectionTitle title='احجز استشارتك' calssName='text' />
          <h2 className="text-lg font-bold text-black mt-12">البيانات الشخصية</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-no-repeat bg-cover bg-center py-16" noValidate style={{ backgroundImage: `url(${BookingImage})` }}>
          <div className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <h2 className="text-lg font-bold text-gray-800 p-3">تفاصيل المشروع</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <Select
                label=" نوع الخدمة"
                required
                options={[
                  { value: 'web', label: 'تطوير موقع إلكتروني' },
                  { value: 'mobile', label: 'تطبيق جوال' },
                  { value: 'consultation', label: 'استشارة برمجية' },
                ]}
                {...register('service')}
                error={errors.service?.message}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4">
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

            <Textarea
              label="وصف المشروع "
              required
              maxLength={100}
              {...register('description')}
              error={errors.description?.message}
            />
          </div>
          <div className='text-left'>
            <Button
              text="تأكيد الحجز"
              onClick={() => console.log('تم الضغط')}
            />
          </div>

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

          <Textarea
            label="وصف المشروع "
            required
            maxLength={100}
            {...register('description')}
            error={errors.description?.message}
          />
        </form >
        <div className='text-left'>
          <Button
            text="تأكيد الحجز"
            onClick={() => console.log('تم الضغط')}
            className="brand-gradient hover:from-blue-700 hover:to-purple-800 text-white"
          />
        </div>
      </div>
    </>
  );
};
export default BookingPage;