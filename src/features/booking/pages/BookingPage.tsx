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
export const BookingPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
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
    <div className="w-full overflow-x-hidden ">
      <Reveal direction="up" delay={0.1}>
        <div className='flex justify-center items-center w-full'>
          <SectionHero title='احجز الآن' subtitle='دعنا نخطط لنجاحك. املأ النموذج وسيتواصل معك خبراؤنا لتحديد موعد جلستك الاستشارية' variant='stacked' className="brand-gradient py-20 w-full" />
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dir-rtl box-border lg:py-24 py-5">
          <div className='mb-6 w-full text-right'>
            <SectionTitle title='احجز استشارتك' calssName='text' />
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
                label="وصف المشروع "
                required
                maxLength={100}
                {...register('description')}
                error={errors.description?.message}
              />
            </div>
          </form>

          <div className='text-left w-full ml-3'>
            <Button
              text="تأكيد الحجز"
              onClick={handleSubmit(onSubmit)}
              className="brand-gradient hover:from-blue-700 hover:to-purple-800 text-white w-full sm:w-auto px-8 py-3"
            />
          </div>
        </div>
      </Reveal>
    </div >
  );
};
export default BookingPage;