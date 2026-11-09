import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';


interface Button {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
}

const Button: React.FC<Button> = ({
  text,
  onClick,
  type = 'button',
  id,
  className = '',
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

 const defaultClasses = isHome 
  ? className || 'brand-gradient hover:from-blue-700 hover:to-purple-800 text-white' 
  : '!bg-transparent !text-white !border !border-white hover:!bg-white ';
  return (
    <>
      <motion.button
       whileHover={{ scale: 1.03 }}
       whileTap={{ scale: 0.97 }}
       transition={{ duration: 0.2, ease: 'easeOut' }}
       className={` w-37.5  decoration-0 text-center p-3 mt-4 rounded-xl cursor-pointer   inline-block ${defaultClasses} ${className}`} type={type} id={id} onClick={onClick}>
        
        {text}
      </motion.button>
    </>
  );
};

export default Button
