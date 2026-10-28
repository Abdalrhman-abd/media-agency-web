import React from 'react';

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
  className = 'brand-gradient text-white',

}) => {
  return (
    <>
      <button className={`w-37.5  decoration-0 text-center p-3 mt-4 rounded-xl cursor-pointer hover:scale-99 active:scale-95 inline-block ${className}`} type={type} id={id} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button
