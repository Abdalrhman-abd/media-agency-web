import React from 'react';
import { useLocation } from 'react-router-dom';

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
      <button className={`w-37.5  decoration-0 text-center p-3 mt-4 rounded-xl cursor-pointer hover:scale-99 active:scale-95 inline-block ${defaultClasses} ${className}`} type={type} id={id} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button
