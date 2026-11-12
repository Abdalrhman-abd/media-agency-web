
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

let recaptchaPromise: Promise<void> | null = null;
let loadedSiteKey: string | null = null;

export const loadRecaptchaScript = (
  siteKey: string
): Promise<void> => {

  if (!siteKey) {
    return Promise.reject(
      new Error('reCAPTCHA Site Key is missing')
    );
  }

  if (recaptchaPromise && loadedSiteKey === siteKey) {
    return recaptchaPromise;
  }

  if (loadedSiteKey && loadedSiteKey !== siteKey) {
    return Promise.reject(
      new Error('reCAPTCHA Site Key mismatch')
    );
  }

  loadedSiteKey = siteKey;

  recaptchaPromise = new Promise<void>((resolve, reject) => {

    const existingScript = document.querySelector(
      'script[src*="recaptcha/api.js"]'
    );

    if (window.grecaptcha) {
      window.grecaptcha.ready(() => resolve());
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', () => {
        window.grecaptcha.ready(() => resolve());
      }, { once: true });

      existingScript.addEventListener('error', () => {
        recaptchaPromise = null;
        loadedSiteKey = null;
        reject(new Error('Failed to load reCAPTCHA'));
      }, { once: true });

      return;
    }

    const script = document.createElement('script');

    script.src =
      `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;

    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!window.grecaptcha) {
        recaptchaPromise = null;
        loadedSiteKey = null;
        reject(new Error('Google reCAPTCHA was not initialized'));
        return;
      }

      window.grecaptcha.ready(() => resolve());
    };

    script.onerror = () => {
      recaptchaPromise = null;
      loadedSiteKey = null;
      reject(new Error('Failed to load Google reCAPTCHA script'));
    };

    document.head.appendChild(script);
  });

  return recaptchaPromise;
};
