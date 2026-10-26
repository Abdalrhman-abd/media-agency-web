import React from 'react';

export interface decorationProps {
  className?: string;
}
const decoration: React.FC<decorationProps> = ({ className = '' }) => {
  return <div className={`w-11 h-1 bg-[#F4B400] rounded ${className}`}></div>;
};
export default decoration;
