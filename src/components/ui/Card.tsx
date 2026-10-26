
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export interface CardProps {
  id?: string | number;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode | string;
  linkText?: string;
  linkUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonClassName?: string;
  className?: string;
  iconBg?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  linkText,
  linkUrl,
  buttonText,
  onButtonClick,
  buttonClassName,
  className = '',
  iconBg = 'bg-purple-50',
}) => {
  return (
    <div
      className={`bg-[#e8e8e84e] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center border border-gray-100 ${className}`}
    >
      <div className="flex flex-col items-center w-full">
        {/* الصورة إن وجدت */}
        {image && (
          <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* الأيقونة إن وجدت */}
        {icon && !image && (
          <div className={`w-20 h-20 rounded-full text-[#3b236e] flex items-center justify-center mb-4 text-2xl ${iconBg}`}>
            {typeof icon === 'string' ? (
              <img src={icon} alt={title} className="w-8 h-8 object-contain" />
            ) : (
              icon
            )}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-[#9E9E9E] text-sm leading-relaxed">{description}</p>
      </div>

      {/* منطقة الأكشن: زر أو رابط نصي في المنتصف */}
      {(linkUrl || buttonText) && (
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center w-full">
          {/* 1. خيار الزر الفعلي */}
          {buttonText && (
            <Button text={buttonText} onClick={onButtonClick} className={`w-full ${buttonClassName || ''}`} />
          )}

          {/* 2. خيار الرابط العادي */}
          {linkUrl && !buttonText && (
            <Link to={linkUrl} className="inline-flex items-center justify-center text-sm font-semibold text-[#0F4C81] hover:text-purple-600 transition-colors gap-1" >
              <span>{linkText || 'عرض التفاصيل'}</span>
              <span aria-hidden="true">&larr;</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;