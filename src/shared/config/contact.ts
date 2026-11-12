export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  telegram?: string;
  whatsapp?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface SiteSettings {
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  workingHours?: string;
  mapUrl: string;
  socialLinks: SocialLinks;
}

export const DEFAULT_CONTACT_INFO: SiteSettings = {
  email: 'info@media.com',
  phone: '+965 841 123 65',
  whatsapp: '96584112365', // بدون علامة + لتتوافق مع رابط wa.me/<number>
  address: 'حلب - سوريا',
  workingHours: 'السبت - الخميس: 9:00 صباحاً - 6:00 مساءً',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103022.83682047778!2d37.06615142134735!3d36.20392390873521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813b98135af%3A0x967e5e5fc542c32a!2sAleppo%2C%20Syria!5e0!3m2!1sen!2sin!4v1793704900134!5m2!1sen!2sin',
  socialLinks: {
    telegram: '',
    instagram: '',
    facebook: '',
  },
};