import React from 'react';
import { StatItem } from '../data';

interface StatCardProps {
  stat: StatItem;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className=" p-4 flex flex-col items-center text-center">
      <span className="text-3xl md:text-4xl font-bold brand-text-gradient mb-2">{stat.value}</span>
      <h3 className="font-semibold text-m text-gray-800 mb-1">{stat.label}</h3>
      <p className="text-sm text-gray-500">{stat.description}</p>
      {stat.images && (
        <div className="flex flex-row justify-center items-center gap-2 mt-3">
          {stat.images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="stat-img" className="w-8 h-8 rounded-full object-cover" />
          ))}
        </div>
      )}
    </div>
  );
};

export default StatCard;