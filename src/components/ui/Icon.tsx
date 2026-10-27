import React from 'react'
import {Location, Call, Sms, CloseCircle, ArrowRight2} from 'iconsax-react' ;
import {FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa'

const iconMap = {
  location: Location,
  call: Call,
  sms: Sms,
  close: CloseCircle,
  arrow: ArrowRight2,
  telegram: FaTelegramPlane,    
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export type IconName = keyof typeof iconMap;

export type IconVariant = 'Linear' | 'Outline' | 'Bold' | 'Broken' | 'BoldDown' | 'Bulk';

export interface IconProps{
name: IconName;
  size?: number | string;
  color?: string;
  variant?: IconVariant;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  variant = 'Linear',
  className = '',
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in iconMap.`);
    return null;
  }

  // تحقق مما إذا كانت الأيقونة من react-icons (شعارات السوشيال ميديا)
  const isReactIcon = ['telegram', 'facebook', 'instagram'].includes(name);

  if (isReactIcon) {
    const SocialIcon = iconMap[name] as React.ComponentType<{ size?: number | string; color?: string }>;
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <SocialIcon size={size} color={color} />
      </span>
    );
  }

  // 2. إذا كانت الأيقونة من iconsax-react (مع variant)
  const IconsaxIcon = iconMap[name] as React.ComponentType<{ size?: number | string; color?: string; variant?: IconVariant }>;

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconsaxIcon size={size} color={color} variant={variant} />
    </span>
  );
};

export default Icon;