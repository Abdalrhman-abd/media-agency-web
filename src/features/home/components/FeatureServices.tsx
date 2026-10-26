import React from 'react'
import Card from '../../../components/ui/Card'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'

const FeatureServices = () => {
  return (
    <>
      <section>
        <div className='flex justify-center items-center p-25'>
          <span className='border-b-4 border-[#F4B400] h-[3px] w-10 rounded-[99px]'></span>
          <span className='block font-bold'>خدماتنا</span>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center p-5'>
            <Card icon={icon1} iconBg="bg-[#F6E6FF]" title='التصميم الإبداعي' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center max-w-[300px] ' />
          </div>
          <div className='flex justify-center items-center p-5'>
            <Card icon={icon2} iconBg="bg-[#FFF6DB]" title=' المطبوعات' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center max-w-[300px] bg-[#FFF6DB]' />
          </div>
          <div className='flex justify-center items-center p-5'>
            <Card icon={icon3} iconBg="bg-[#E8F4FF]" title=' الإعلانات' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center max-w-[300px]' />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureServices