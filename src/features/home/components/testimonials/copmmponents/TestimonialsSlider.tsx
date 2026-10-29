import React, { useState } from 'react';

import { testimonials } from './../data';

import SectionTitle from '../../../../../components/ui/SectionTitle';

import Card from './Card';

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  const maxIndex = Math.max(0, testimonials.length - 3);

  return (
    <div className="min-h-[50vh] overflow-hidden">
      <div className="lg:ps-24 sm:ps-20 ps-10">
        <SectionTitle
          title="آراء عملائنا"
          subtitle="ثقة عملائنا هي أكبر دليل على نجاحنا"
        />
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
