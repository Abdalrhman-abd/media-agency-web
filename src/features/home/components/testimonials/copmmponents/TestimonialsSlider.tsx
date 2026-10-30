import React, { useState } from 'react';

import { testimonials } from './../data';

import SectionTitle from '../../../../../components/ui/SectionTitle';

import Card from './Card';

const TestimonialsSlider = () => {
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
    <div className="min-h-[50vh] overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center lg:px-24 sm:px-20 px-10 gap-4">
        <SectionTitle
          title="آراء عملائنا"
          subtitle="ثقة عملائنا هي أكبر دليل على نجاحنا"
        />
        
        {/* أزرار السابق والتالي */}
        <div className="flex gap-3 self-end sm:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="الآراء السابقة"
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            aria-label="الآراء التالية"
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
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
