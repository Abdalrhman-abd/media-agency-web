import { apiClient } from './client';
import { ApiSuccess } from '../types/api';

// ==================== GET ENDPOINTS ====================

// 1. الإعدادات العامة (للـ Footer وصفحة الاتصال)
export const getSettings = async () => {
  const response = await apiClient.get<ApiSuccess<any>>('/settings');
  return response.data.data;
};

// 2. قائمة الخدمات
export const getServices = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/services');
  return response.data.data;
};

// 3. خدمة واحدة عبر الـ slug
export const getServiceBySlug = async (slug: string) => {
  const response = await apiClient.get<ApiSuccess<any>>(`/services/${slug}`);
  return response.data.data;
};

// 4. فئات معرض الأعمال
export const getCategories = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/categories');
  return response.data.data;
};

// 5. قائمة المشاريع (مع دعم التصفح والبحث)
export const getProjects = async (params?: { page?: number; limit?: number; category?: string; featured?: boolean; search?: string }) => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/projects', { params });
  return {
    data: response.data.data,
    meta: response.data.meta,
  };
};

// 6. تفاصيل المشروع عبر الـ slug
export const getProjectBySlug = async (slug: string) => {
  const response = await apiClient.get<ApiSuccess<any>>(`/projects/${slug}`);
  return response.data.data;
};

// 7. أعضاء الفريق
export const getTeam = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/team');
  return response.data.data;
};

// 8. آراء العملاء (Testimonials)
export const getTestimonials = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/testimonials');
  return response.data.data;
};

// 9. الأسئلة الشائعة (FAQs)
export const getFaqs = async () => {
  const response = await apiClient.get<ApiSuccess<any[]>>('/faqs');
  return response.data.data;
};

// 10. فحص الأوقات المتاحة للحجوزات لتاريخ معين
export const getBookingAvailability = async (date: string) => {
  const response = await apiClient.get<ApiSuccess<{ date: string; takenTimes: string[] }>>(`/bookings/availability`, {
    params: { date },
  });
  return response.data.data;
};


// ==================== POST ENDPOINTS & RECAPTCHA ====================

// دالة مساعدة للحصول على رمز reCAPTCHA v3 من جوجل
export const executeRecaptcha = async (actionName: string, siteKey: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && (window as any).grecaptcha) {
      (window as any).grecaptcha.ready(async () => {
        try {
          const token = await (window as any).grecaptcha.execute(siteKey, { action: actionName });
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    } else {
      reject(new Error('Google reCAPTCHA is not loaded.'));
    }
  });
};

// 1. إرسال حجز جديد (Booking)
export const createBooking = async (bookingData: {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  meetingType: 'IN_PERSON' | 'ONLINE';
  description?: string;
}, siteKey: string) => {
  const recaptchaToken = await executeRecaptcha('booking', siteKey);
  
  const response = await apiClient.post<ApiSuccess<any>>('/bookings', bookingData, {
    headers: {
      'X-Recaptcha-Token': recaptchaToken,
    },
  });
  return response.data.data;
};

// 2. إرسال رسالة تواصل (Contact)
export const sendContactMessage = async (contactData: {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}, siteKey: string) => {
  const recaptchaToken = await executeRecaptcha('contact', siteKey);
  
  const response = await apiClient.post<ApiSuccess<any>>('/contact', contactData, {
    headers: {
      'X-Recaptcha-Token': recaptchaToken,
    },
  });
  return response.data.data;
};

// 3. الاشتراك بالنشرة البريدية (Newsletter)
export const subscribeNewsletter = async (emailData: {
  email: string;
  source?: 'footer';
}, siteKey: string) => {
  const recaptchaToken = await executeRecaptcha('newsletter', siteKey);
  
  const response = await apiClient.post<ApiSuccess<any>>('/newsletter/subscribe', emailData, {
    headers: {
      'X-Recaptcha-Token': recaptchaToken,
    },
  });
  return response.data.data;
};