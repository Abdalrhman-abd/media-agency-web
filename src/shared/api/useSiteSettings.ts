import { useQuery } from '@tanstack/react-query';
import { apiClient } from './client'; 
import { DEFAULT_CONTACT_INFO, SiteSettings } from '../config/contact';

// 1. دالة جلب الإعدادات من السيرفر
export const getSettings = async (): Promise<SiteSettings> => {
  const response = await apiClient.get('/settings');
  return response.data?.data || response.data;
};

// 2. الهوك المشترك مع تخزين مؤقت لمدة 10 دقائق
export const useSiteSettings = () => {
  const query = useQuery({
    queryKey: ['site-settings'],
    queryFn: getSettings,
    staleTime: 10 * 60 * 1000, // 10 دقائق
  });

  // دمج بيانات السيرفر مع القيم الاحتياطية لضمان عدم وجود حقول فارغة
  const settings: SiteSettings = {
    ...DEFAULT_CONTACT_INFO,
    ...query.data,
    socialLinks: {
      ...DEFAULT_CONTACT_INFO.socialLinks,
      ...(query.data?.socialLinks || {}),
    },
  };

  return {
    ...query,
    settings,
  };
};