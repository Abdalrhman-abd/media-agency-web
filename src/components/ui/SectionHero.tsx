import React from 'react';
import Button from './Button';

export interface SectionHeroProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    variant?: 'stacked' | 'inline';
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
    title,
    subtitle,
    align = 'left',
    variant = 'inline',
    buttonText,
    onButtonClick,
    className = '',
}) => {
    const alignmentClasses = {
        left: 'items-start text-start',
        center: 'items-center text-center',
        right: 'items-end text-end',
    };

    return (
        /* أزلنا brand-gradient من هنا لتكون العبارة عامة، ونحن نتحكم بالخلفية من الخارج */
        <div className={`w-full ${className}`}>
            <div className={`flex w-full flex-col gap-3 px-35 ${alignmentClasses[align]}`}>
                <div className=''>
                    <div className={`flex ${variant === 'stacked' ? 'flex-col' : 'flex-row items-center gap-3 '} mt-10`}>
                        <div aria-hidden="true" className="h-1 w-11 shrink-0 rounded bg-brand-yellow mt-20" />
                        <h2 className="text-6xl font-extrabold text-white mt-2">{title}</h2>
                    </div>

                    {subtitle && <p className="m-0 font-medium text-white mt-10">{subtitle}</p>}
                    {buttonText && (
                        <div className='p-2 '>
                            <Button
                                text={buttonText}
                                className="bg-transparent text-white hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:text-white border-1 rounded-xl "
                                onClick={onButtonClick || (() => console.log('تم الضغط'))}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHero;