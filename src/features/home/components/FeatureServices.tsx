import React from 'react'
import Card from '../../../components/ui/Card'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import SectionTitle from '../../../components/ui/SectionTitle.tsx'

const FeatureServices = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center py-12 px-4'>
        <div className='text-center mb-8'>
          <SectionTitle align="center" title='خدماتنا' subtitle='حلول متكاملة لنجاح مشروعك حتى إلى جمهورك المستهدف بفعالية تامة.'/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
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

export default FeatureServices;