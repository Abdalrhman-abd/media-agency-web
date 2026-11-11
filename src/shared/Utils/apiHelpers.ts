

export const getRecaptchaHeaders = (token: string) => {
  return {
    headers: {
      'X-Recaptcha-Token': token,
    },
  };
};


// للتذكير:طريقة الاستخدام داخل النماذج (Forms):
// const { getToken } = useRecaptcha();

// const handleSubmit = async (formData) => {
//   // 1. جلب الرمز قبل الإرسال
//   const token = await getToken('contact'); 

//   // 2. إرسال الطلب مع الترويسة
//   await axios.post('/api/contact', formData, getRecaptchaHeaders(token));
// };