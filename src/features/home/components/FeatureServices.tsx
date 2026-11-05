import React from 'react'
import Card from '../../../components/ui/Card'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import SectionTitle from '../../../components/ui/SectionTitle.tsx'

const FeatureServices = () => {
  return (
    <div className=' min-h-[90vh] flex items-center justify-center '>
      <div className='w-full'>
        <section className='flex flex-col items-center justify-center py-10 px-4'>
          <div className='text-center mb-8'>
            <SectionTitle align="center" title='خدماتنا' subtitle='حلول متكاملة لنجاح مشروعك حتى إلى جمهورك المستهدف بفعالية تامة.' />
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap'>
            <div className='flex justify-center items-center '>
              <Card icon={icon1} iconBg="bg-[#F6E6FF]" title='التصميم الإبداعي' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center w-70 lg:w-70 xl:w-[350px]  h-[280px] lg:h-80 ' />
            </div>
            <div className='flex justify-center items-center '>
              <Card icon={icon2} iconBg="bg-[#FFF6DB]" title=' المطبوعات' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center w-70 lg:w-70 xl:w-[350px] bg-[#FFF6DB]  h-[280px] lg:h-80' />
            </div>
            <div className='flex justify-center items-center '>
              <Card icon={icon3} iconBg="bg-[#E8F4FF]" title=' الإعلانات' description='هوية بصرية، تصاميم رقمية وتصاميم مطبوعة مميزة' linkUrl='اكتشف المزيد' linkText='اكتشف المزيد ' className='flex justify-center items-center w-70 lg:w-70 xl:w-[350px]   h-[280px] lg:h-80' />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FeatureServices;