import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {contactSchema,type ContactFormData,} from '../types/contact.types';

import { useContactMutation } from '../hooks/useContactMutation';
import { useRecaptcha } from '../../../shared/hooks/useRecaptcha';

import { Input } from '../../forms/Input';
import { Textarea } from '../../forms/Textarea';
import Button from '../../../components/ui/Button';

import BookingImage from '../../../assets/images/BookingImage.png';

const ContactForm: React.FC = () => {
  // حالات رسائل النجاح والخطأ
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // إدارة النموذج
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // إدارة عملية الإرسال
  const { mutate: submitContact, isPending } = useContactMutation();

  // reCAPTCHA
  const { getToken } = useRecaptcha();

  // إرسال بيانات التواصل
  const onSubmit = async (data: ContactFormData) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      // الحصول على رمز التحقق
      const token = await getToken('contact');

      // إرسال البيانات إلى Backend
      submitContact(
        {
          payload: data,
          recaptchaToken: token,
        },
        {
          onSuccess: () => {
            setSuccessMessage(
              'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
            );

            reset();
          },

          onError: (error) => {
            console.error('Contact Error:', error);

            setErrorMessage(
              error.message || 'حدث خطأ أثناء إرسال الرسالة'
            );
          },
        }
      );

    } catch (error) {
      console.error('Submission Error:', error);

      setErrorMessage(
        'فشل التحقق الأمني، يرجى المحاولة مرة أخرى'
      );
    }
  };

  return (
    <section
      className="flex items-center justify-center my-auto max-w-6xl m-auto min-h-[80vh] bg-no-repeat bg-contain bg-center w-full"
      style={{ backgroundImage: `url(${BookingImage})` }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:mx-14 mx-5"
      >
        <div className="space-y-4">

          {/* رسالة النجاح */}
          {successMessage && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          {/* رسالة الخطأ */}
          {errorMessage && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <Input
              label="الاسم الكامل"
              required
              placeholder="أدخل اسمك"
              {...register('fullName')}
              error={errors.fullName?.message}
            />

            <Input
              label="البريد الإلكتروني"
              type="email"
              required
              placeholder="example@email.com"
              {...register('email')}
              error={errors.email?.message}
            />

          </div>

          <Textarea
            label="الرسالة"
            required
            maxLength={100}
            placeholder="اكتب رسالتك هنا"
            {...register('message')}
            error={errors.message?.message}
          />

          <div className="text-left">
            <Button
              type="submit"
              className='brand-gradient text-white'
              disabled={isPending || isSubmitting}
              text={
                isPending || isSubmitting
                  ? 'جاري الإرسال...'
                  : 'إرسال'
              }
            />
          </div>

        </div>
      </form>
    </section>
  );
};

export default ContactForm;