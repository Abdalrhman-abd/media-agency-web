
import { useEffect, useCallback } from 'react';
import { loadRecaptchaScript } from '../lib/recaptcha';

type RecaptchaAction = 'booking' | 'contact' | 'newsletter';

export const useRecaptcha = () => {
  // هنا نقرأ مفتاح الموقع من ملف البيئة .env.
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
// هذا الجزء مسؤول عن تحميل مكتبة Google عند استخدام الـ Hook.
  useEffect(() => {
    if (!siteKey) {
      console.error(
        'VITE_RECAPTCHA_SITE_KEY is missing!'
      );
      return;
    }

    loadRecaptchaScript(siteKey).catch((error) => {
      console.error(
        'Failed to load reCAPTCHA:',
        error
      );
    });
  }, [siteKey]);
// أنشأنا دالة اسمها getToken.

// تستقبل متغيراً اسمه action.
  const getToken = useCallback(
    async (action: RecaptchaAction): Promise<string> => {

      if (!siteKey) {
        throw new Error('reCAPTCHA Site Key is missing');
      }

      try {
        // التأكد من تحميل مكتبة Google
        await loadRecaptchaScript(siteKey);

        if (!window.grecaptcha) {
          throw new Error('reCAPTCHA is not available');
        }

        // إنشاء Token حقيقي
        const token = await new Promise<string>((resolve, reject) => {

          window.grecaptcha.ready(async () => {
            try {
              const result = await window.grecaptcha.execute(
                siteKey,
                { action }
              );

              if (!result) {
                reject(new Error('Empty reCAPTCHA token'));
                return;
              }

              resolve(result);

            } catch (error) {
              reject(error);
            }
          });

        });

        console.log('reCAPTCHA token generated successfully');

        return token;

      } catch (error) {
        console.error('reCAPTCHA execution failed:', error);
        throw error;
      }
    },
    [siteKey]
  );

  return { getToken };
};