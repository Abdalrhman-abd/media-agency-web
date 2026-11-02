import React from 'react';

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'stacked' | 'inline';
  calssName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  variant = 'inline',
  calssName ='',
}) => {
  const alignmentClasses = {
    left: 'items-start text-start',
    center: 'items-center text-center',
    right: 'items-end text-end',
  };

  return (
    <div className={`flex w-full flex-col gap-3 ${alignmentClasses[align]} ${calssName}`} >
      <div className={`flex ${variant === 'stacked' ? 'flex-col' : 'flex-row items-center gap-3 '}`}>
        <div aria-hidden="true" className="h-1 w-11 shrink-0 rounded bg-brand-yellow mt-2"/>

        <h2 className="m-0 text-3xl font-extrabold ">{title}</h2>
      </div>

      {subtitle && <p className= " m-0 font-semil  text-text-muted">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;