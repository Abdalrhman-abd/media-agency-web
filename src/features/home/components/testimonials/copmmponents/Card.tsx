import React from 'react';
import type { Testimonial } from '../types';

interface CardProps {
  item: Testimonial;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="border border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,var(--color-brand-blue),var(--color-brand-purple))_border-box] rounded-2xl  border-2 px-8  m-1 py-5 lg:py-12 w-[325px] md:w-[300px] lg:w-[420px] ">
      <div className="flex flex-row items-center gap-7">
        <img
          src={item.avatar}
          alt={item.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h2 className="text-2xl font-extrabold">{item.name}</h2>
          <p className="text-text-primary">{item.role}</p>
        </div>
      </div>

      <p className="mt-4 text-center text-text-muted leading-8">{item.quote}</p>
    </div>
  );
};

export default Card;
