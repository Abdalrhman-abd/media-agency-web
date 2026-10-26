import React from 'react'
import HeroSectionImage from '../../../assets/images/HeroSectionImage.png'
import Button from '../../../components/ui/Button'

const HeroSection = () => {
  return (
    <section
      className='w-full min-h-[650px] md:min-h-[800px] lg:min-h-[940px] bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${HeroSectionImage})` }}
    >
      <div className='pt-55 pb-10 px-5 sm:px-8 sm:pt-50  md:px-12 md:pt-70 lg:px-20 lg:pt-80 xl:px-33 xl:pt-85'>
        
        <div className='flex flex-col items-start'>
          <div>
            <span className='block font-bold text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-[80px]'>
              علامتك التجارية،
            </span>
          </div>

          <div>
            <span className='block font-bold text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-[80px]'>
              كما يجب أن تُرى
            </span>
          </div>

          <p className='text-[#888888] text-sm leading-relaxed mt-5 sm:text-lg md:text-xl lg:text-2xl lg:mt-10'>
            نبتكر هويتك الرقمية، وننتج مطبوعاتك الفاخره,
          </p>

          <p className='text-[#888888] text-sm leading-relaxed mt-2 sm:text-lg md:text-xl lg:text-2xl'>
            ونقود حملاتك الإعلانية.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3 py-4 sm:gap-4'>
          <Button
            text="ابدأ مشروعك الآن"
            onClick={() => console.log('تم الضغط')}
          />

          <Button
            text="تعرف علينا أكثر"
            className="bg-transparent text-[#6A1B9A] hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:text-white border-1 rounded-xl"
            onClick={() => console.log('تم الضغط')}
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection
