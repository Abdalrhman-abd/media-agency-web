import Decoration from '../../../components/ui/decoration';
import half from '../../../assets/images/half-icon.png';
import SectionTitle from '../../../components/ui/SectionTitle';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
const SolutionsBanner = () => {
  const navigate=useNavigate();
  return (
    <div className="  p-5  lg:px-0 flex flex-col items-center">
      <div className= "flex flex-col min-h-[80vh] items-center justify-center w-full max-w-7xl justify-center items-center">
        <div className="lg:ms-40 md:ms-10 ms-3  mb-8 w-full flex justify-center ">
          <SectionTitle
            title="كيف يمكننا مساعدتك ؟"
            subtitle=" لدينا حلول متكامله مخصصه خصيصا لتلبيه تطلعات قطاع الاعمال ومشاريع
            الفراد"
            variant="inline"
            align="left"
            calssName=''
          />
        </div>

        <div className="my-10 flex-col md:flex-row flex items-center justify-center gap-5 w-full">
          <div className="flex flex-col justify-center items-center text-center border-3 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_bottom_right,#0F4C81,#6A1B9A)_border-box] max-w-[550px] min-h-[260px] px-10 py-6 rounded-3xl w-full">
            <h2 className="text-2xl font-semibold ">
              حلول اعمال استراتيجيه للشركات /B2B/
            </h2>
            <p className="px-4 pt-4 pb-2 text-[#A5A5A5] text-3">
              نبتكر هويات بصريه متكامله تقود نمو اعمالك وتضمن صداره
            </p>
            <p className='text-[#A5A5A5] text-3'>علامتك في السوق</p>
            <Button text="احجز استشارتك المجانية" className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-700 hover:to-purple-800 text-white w-[180px] h-[45px]"
              onClick={() => navigate('/book-consultation')} />
          </div>
          <div className="flex flex-col justify-center items-center  text-center border-3 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_bottom_right,#0F4C81,#6A1B9A)_border-box] max-w-[550px] min-h-[260px] px-10 py-6 rounded-3xl w-full">
            <h2 className="text-2xl font-semibold ">
              خدمات إبداعية للأفراد /B2C/
            </h2>
            <p className="px-4 pt-4 pb-2 text-[#A5A5A5] text-3 ">
              حوّل رؤيتك وأفكارك الشخصية إلى تصاميم ملموسة ومبهرة. جودة
            </p>
            <p className='text-[#A5A5A5] text-3'>وتنفيذ احترافي يتطابق تماماً مع أسلوبك الفريد.</p>
            <Button text="ابدأ مشروعك الآن" className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-700 hover:to-purple-800 text-white w-[180px] h-[45px]"
              onClick={() => navigate('/book-consultation')} />
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row  overflow-hidden mb-10 mt-15 brand-gradient text-white min-h-[40vh]  rounded-4xl w-full ">
        <div className="flex  items-center justify-between">
          <div className="flex flex-col  py-10 pr-5 md:py-20 md:pr-20 w-full max-w-3/4">
            <div className="flex gap-2">
              <Decoration className="mt-6 whitespace-nowrap" />
              <h1 className="text-3xl font-bold  whitespace-nowrap">
                هل انت مستعد؟
              </h1>
            </div>
            <p className="leading-loose py-2 md:py-8 text-[clamp(14px,2vw,22px)]">
              هل أنت مستعد لتنطلق بعلامتك التجارية من مجرد فكرة إلى واقع ملموس
              يفرض وجوده في السوق ويبهر الجميع؟ ابدأ رحلة صدارتك الآن باستشارة
              مجانية، ولنرسم معاً خريطة نجاحك، خطوة بخطوة.
            </p>
           
            <Button onClick={() => navigate('/book-consultation')}  text='احجز استشاراتك المجانيه الان' className='lg:w-72 md:w-64 w-56 border-2'/>
          </div>
          <img src={half} alt="" className="w-32 sm:w-72 lg:h-96  sm:h-80 h-48" />
        </div>
        <div></div>
      </div>


    </div>
  );
};

export default SolutionsBanner;