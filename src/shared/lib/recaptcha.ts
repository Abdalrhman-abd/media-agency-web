
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let isLoaded = false;

export const loadRecaptchaScript = (siteKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isLoaded || window.grecaptcha) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isLoaded = true;
      window.grecaptcha.ready(() => {
        resolve();
      });
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.head.appendChild(script);
  });
};