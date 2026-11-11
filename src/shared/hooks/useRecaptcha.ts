// src/shared/hooks/useRecaptcha.ts
import { useEffect, useCallback } from 'react';
import { loadRecaptchaScript } from '../lib/recaptcha';

type RecaptchaAction = 'booking' | 'contact' | 'newsletter';

export const useRecaptcha = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      console.warn('VITE_RECAPTCHA_SITE_KEY is missing in environment variables.');
      return;
    }
    loadRecaptchaScript(siteKey).catch((err) => {
      console.error('Failed to load Google reCAPTCHA script:', err);
    });
  }, [siteKey]);

  const getToken = useCallback(
    async (action: RecaptchaAction): Promise<string> => {
      // إذا كان المفتاح غير موجود في بيئة التطوير، نعيد نصاً فارغاً ولا نحدث خطأ
      if (!siteKey) {
        console.warn(`reCAPTCHA skipped for action "${action}" because site key is missing.`);
        return '';
      }

      try {
        return new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(siteKey, { action });
            resolve(token);
          });
        });
      } catch (error) {
        console.error('Error executing reCAPTCHA:', error);
        return '';
      }
    },
    [siteKey]
  );

  return { getToken };
};