
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '../types/contact.types'
import { Input } from '../../forms/Input'
import { Textarea } from '../../forms/Textarea'
import Button from '../../../components/ui/Button'
import SectionTitle from '../../../components/ui/SectionTitle'
import BookingImage from "../../../assets/images/BookingImage.png"
const ContactForm: React.FC = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = (data: ContactFormData) => {
    console.log('بيانات الاتصال:', data);
    setIsSubmitted(true);
  }
  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  }

  return (
    <section className="flex items-center justify-center   my-auto max-w-6xl  m-auto min-h-[80vh] bg-no-repeat bg-contain  bg-center  w-full" style={{ backgroundImage: `url(${BookingImage})` }}>

      <form onSubmit={handleSubmit(onSubmit)} className='w-full  md:mx-14 mx-5'>
        <div className="space-y-4 ">
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
              text="ارسال "
              onClick={() => console.log('تم الضغط')}
            />
          </div>
        </div>
      </form>




    </section>
  )
}

export default ContactForm

