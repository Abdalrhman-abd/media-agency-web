import React from 'react';
import Decoration from '../../../components/ui/decoration';
import half from '../../../assets/images/half-icon.png';
import SectionTitle from '../../../components/ui/SectionTitle';
const SolutionsBanner = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <div className=" ">
          <SectionTitle
            title="كيف يمكننا مساعدتك ؟"
            subtitle=" لدينا حلول متكامله مخصصه خصيصا لتلبيه تطلعات قطاع الاعمال ومشاريع
          الافراد
"
            variant="inline"
            align="left"
          />
        </div>

        <div className="px-4 my-10 flex-col md:flex-row flex items-center justify-center gap-10">
          <div className="  text-center border-3 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_bottom_right,#0F4C81,#6A1B9A)_border-box] max-w-xl px-8 py-14 rounded-3xl">
            <h2 className="text-2xl font-semibold ">
              حلول اعمال استراتيجيه للشركات /B2b/
            </h2>
            <p className="px-4 pt-7 pb-5 text-[#A5A5A5] text-3">
              نبتكر هويات بصريه متكامله تقود نمو اعمالك وتضمن صداره علامتك فس
              السوق
            </p>
            <button>احجز استشارتك</button>
          </div>
          <div className="  text-center border-3 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_bottom_right,#0F4C81,#6A1B9A)_border-box] max-w-xl px-8 py-14 rounded-3xl">
            <h2 className="text-2xl font-semibold ">
              حلول اعمال استراتيجيه للشركات /B2b/
            </h2>
            <p className="px-4 pt-7 pb-5 text-[#A5A5A5] ">
              نبتكر هويات بصريه متكامله تقود نمو اعمالك وتضمن صداره علامتك فس
              السوق
            </p>
            <button>احجز استشارتك</button>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row  overflow-hidden mb-10 brand-gradient text-white min-h-[40vh]  rounded-4xl">
        <div className="flex  items-center justify-between">
          <div className="flex flex-col  py-10 pr-5 md:py-20 md:pr-20 w-full max-w-3/4">
            <div className="flex gap-2">
              <Decoration className="mt-6 whitespace-nowrap" />
              <h1 className="text-3xl font-bold  whitespace-nowrap">
                هل انت مستعد؟
              </h1>
            </div>
            <p className="leading-loose py-2 md:py-8 text-[clamp(14px,2vw,24px)]">
              هل أنت مستعد لتنطلق بعلامتك التجارية من مجرد فكرة إلى واقع ملموس
              يفرض وجوده في السوق ويبهر الجميع؟ ابدأ رحلة صدارتك الآن باستشارة
              مجانية، ولنرسم معاً خريطة نجاحك، خطوة بخطوة.
            </p>
            <button className="  border-2 w-72 py-4 mt-2 rounded-2xl">
              احجز استشاراتك المجانيه الان
            </button>
          </div>
          <img src={half} alt="" className="w-24 sm:w-72" />
        </div>
        <div></div>
      </div>

    
    </div>
  );
};

export default SolutionsBanner;
