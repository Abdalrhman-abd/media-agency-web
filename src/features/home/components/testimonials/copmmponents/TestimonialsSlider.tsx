import React, { useState } from 'react';

import { testimonials } from './../data';

import SectionTitle from '../../../../../components/ui/SectionTitle';

import Card from './Card';

const TestimonialsSlider = () => {
  const [activeButton, setActiveButton] = useState<'prev' | 'next' > ('prev');
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(0, testimonials.length - 3);

  // العناصر المعروضة حالياً (3 عناصر)
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  // دالة الانتقال للخلف
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // دالة الانتقال للأمام
  const handleNext = () => {
    if (activeIndex < maxIndex) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-[50vh] overflow-hidden ">
      <div className="flex  justify-between items-center flex-wrap  lg:mx-48 md:mx-10 mx-3 gap-5">
        <div className='min-w-[250px]'>
          <SectionTitle
            title="آراء عملائنا"
            subtitle="ثقة عملائنا هي أكبر دليل على نجاحنا"
            calssName=''
          />
        </div>
        {/* أزرار السابق والتالي */}
        <div className="flex gap-3 w-[100px]">
          <button
            type="button"
            onClick={() => {
              handlePrev();
              setActiveButton('prev');
            }}
            disabled={activeIndex === 0}
            aria-label="الآراء السابقة"
            className={`p-2.5 rounded-full ${activeButton === 'prev'
              ? 'brand-gradient text-white'
              : 'bg-gray-300 text-black'
              }`}
          >
            <svg className="w-5 h-5  rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => { handleNext(); setActiveButton('next') }}
            disabled={activeIndex === maxIndex}
            aria-label="الآراء التالية"

            className={`p-2.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${activeButton === 'next'
              ? 'brand-gradient text-white'
              : 'bg-gray-300 text-black'
              }`}
          >
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="flex justify-center items-center gap-10 flex-wrap my-10">
        {visibleTestimonials.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 pb-10">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`عرض مجموعة الآراء ${index + 1}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
              ? 'w-8 bg-yellow-400'
              : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
