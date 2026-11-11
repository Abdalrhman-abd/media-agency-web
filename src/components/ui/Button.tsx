import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Spinner } from '../../shared/ui/Spinner'; // تأكد من المسار الصحيح لمكون الـ Spinner الذي أنشأناه

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  loading?: boolean;      // أضفنا خاصية التحميل
  disabled?: boolean;     // أضفنا خاصية التعطيل
  loadingText?: string;   // النص الاختياري أثناء التحميل
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  id,
  className = '',
  loading = false,
  disabled = false,
  loadingText = 'جاري الإرسال...',
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const defaultClasses = isHome 
   ? className || 'brand-gradient hover:from-blue-700 hover:to-purple-800 text-white' 
   : '!bg-transparent !text-white !border !border-white hover:!bg-white ';

  const isDisabled = disabled || loading;

  return (
    <>
      <motion.button
       whileHover={!isDisabled ? { scale: 1.03 } : undefined}
       whileTap={!isDisabled ? { scale: 0.97 } : undefined}
       transition={{ duration: 0.2, ease: 'easeOut' }}
       className={`w-37.5 decoration-0 text-center p-3 mt-4 rounded-xl cursor-pointer inline-block flex items-center justify-center gap-2 ${defaultClasses} ${className} ${
         isDisabled ? 'opacity-75 cursor-not-allowed pointer-events-none' : ''
       }`} 
       type={type} 
       id={id} 
       onClick={!isDisabled ? onClick : undefined}
       disabled={isDisabled}
      >
        {loading ? (
          <>
            <Spinner size="sm" />
            <span>{loadingText}</span>
          </>
        ) : (
          text
        )}
      </motion.button>
    </>
  );
};

export default Button;