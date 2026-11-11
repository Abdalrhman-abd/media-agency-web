import { useQuery, useMutation } from '@tanstack/react-query';
import { 
  getSettings, 
  getServices, 
  getServiceBySlug, 
  getCategories, 
  getProjects, 
  getProjectBySlug, 
  getTeam, 
  getTestimonials, 
  getFaqs, 
  getBookingAvailability,
  createBooking, 
  sendContactMessage, 
  subscribeNewsletter 
} from './publicApi';

// 1. هوك جلب الإعدادات العامة
export const useSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
    staleTime: 1000 * 60 * 10, // تظل البيانات مخزنة مؤقتاً لمدة 10 دقائق
  });
};

// 2. هوك جلب الخدمات
export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });
};

// 3. هوك جلب خدمة مفردة عبر الـ slug
export const useServiceDetail = (slug: string) => {
  return useQuery({
    queryKey: ['service', slug],
    queryFn: () => getServiceBySlug(slug),
    enabled: !!slug,
  });
};

// 4. هوك جلب المشاريع مع مرشحات البحث والتصفح
export const useProjects = (params?: { page?: number; limit?: number; category?: string; featured?: boolean; search?: string }) => {
  return useQuery({
    queryKey: ['projects', params],
    queryFn: () => getProjects(params),
  });
};

// 5. هوك إرسال حجز موعد (Mutation)
export const useCreateBooking = (siteKey: string) => {
  return useMutation({
    mutationFn: (bookingData: any) => createBooking(bookingData, siteKey),
  });
};

// 6. هوك إرسال رسالة تواصل (Mutation)
export const useSendContact = (siteKey: string) => {
  return useMutation({
    mutationFn: (contactData: any) => sendContactMessage(contactData, siteKey),
  });
};

// 7. هوك الاشتراك بالنشرة البريدية (Mutation)
export const useSubscribeNewsletter = (siteKey: string) => {
  return useMutation({
    mutationFn: (emailData: any) => subscribeNewsletter(emailData, siteKey),
  });
};