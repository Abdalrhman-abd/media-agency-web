import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '../types/contact.types'
import { useContactMutation } from '../hooks/useContactMutation'
import { Input } from '../../forms/Input'
import { Textarea } from '../../forms/Textarea'
import Button from '../../../components/ui/Button'
import BookingImage from "../../../assets/images/BookingImage.png"

const ContactForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ربط الـ Mutation وتخزين الرسائل في الحالات المحلية
  const { mutate, isPending } = useContactMutation(
    () => {
      setSuccessMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setErrorMessage('');
      reset();
    },
    (errorMsg) => {
      setErrorMessage(errorMsg);
      setSuccessMessage('');
    }
  );

  const onSubmit = (data: ContactFormData) => {
    setSuccessMessage('');
    setErrorMessage('');
    mutate(data);
  }

  return (
    <section className="flex items-center justify-center my-auto max-w-6xl m-auto min-h-[80vh] bg-no-repeat bg-contain bg-center w-full" style={{ backgroundImage: `url(${BookingImage})` }}>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full md:mx-14 mx-5'>
        <div className="space-y-4 ">
          
          {/* رسائل النجاح أو الخطأ تظهر هنا */}
          {successMessage && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <Input
              label="الاسم الكامل"
              required
              placeholder="أدخل اسمك"
              {...register("fullName")}
              error={errors.fullName?.message}
            />

            <Input
              label="البريد الإلكتروني"
              type="email"
              required
              placeholder="example@email.com"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <Textarea
            label="الرسالة"
            required
            maxLength={100}
            placeholder="اكتب رسالتك هنا"
            {...register("message")}
            error={errors.message?.message}
          />
          <div className='text-left'>
            <Button
              type="submit"
              disabled={isPending || isSubmitting}
              text={isPending || isSubmitting ? "جاري الإرسال..." : "ارسال"}
            />
          </div>
        </div>
      </form>

    </section>
  )
}

export default ContactForm