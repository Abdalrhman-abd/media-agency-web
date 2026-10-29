import logo from '../../assets/images/logofooter.png';

import icon1 from '../../assets/images/Group.png';
import icon2 from '../../assets/images/Vector.png';

import location from '../../assets/images/location.png';
import phone from '../../assets/images/phone.png';
import meeseg from '../../assets/images/meeseg.png';

import telegram from '../../assets/images/telegram.png';
import instgram from '../../assets/images/instgram.png';
import facebook from '../../assets/images/facebookpng.png';

import asidefooter from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer dir="" className="w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-6 brand-gradient min-h-[575px] text-white px-5 sm:px-8 py-12 lg:py-8">
          <div className="order-1 flex flex-col items-center shrink-0">
            <img className="w-36 max-w-full object-contain" src={logo} />
            <p className="text-xs p-4 text-center">
              {' '}
              تصاميم - مطبوعات - إعلانات
            </p>
          </div>

          <div className="order-2 w-full max-w-[700px]  lg:min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-around  lg:justify-between items-start gap-10 sm:gap-6">
              <div className="w-full sm:w-auto">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-cream p-3 rounded-full shrink-0">
                    <img className="w-5 h-5 object-contain" src={icon1} />
                  </div>

                  <h1 className="mt-1 text-xl font-bold whitespace-nowrap">
                    {' '}
                    روابط الوصول{' '}
                  </h1>
                </div>

                <nav className="flex flex-col mt-3">
                  <Link
                    className="p-2 pr-10 inline-block hover:text-yellow-300 transition-colors"
                    to="/"
                  >
                    {' '}
                    الرئيسية{' '}
                  </Link>
                  <Link
                    className="p-2 pr-10 inline-block hover:text-yellow-300 transition-colors"
                    to="/من-نحن"
                  >
                    {' '}
                    من نحن{' '}
                  </Link>
                  <Link
                    className="p-2 pr-10 inline-block hover:text-yellow-300 transition-colors"
                    to="/الخدمات"
                  >
                    {' '}
                    الخدمات{' '}
                  </Link>
                  <Link
                    className="p-2 pr-10 inline-block hover:text-yellow-300 transition-colors"
                    to="/معرض-الأعمال"
                  >
                    {' '}
                    معرض الأعمال{' '}
                  </Link>
                </nav>
              </div>

              <div className="w-full sm:w-auto">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-cream p-3 rounded-full shrink-0">
                    <img className="w-5 h-5 object-contain" src={icon2} />
                  </div>
                  <h1 className="mt-1 text-xl font-bold whitespace-nowrap">
                    {' '}
                    تواصل معنا
                  </h1>
                </div>

                <div className="mt-3">
                  <div className="flex items-center gap-5 p-3">
                    <img
                      className="w-5 h-5 object-contain shrink-0"
                      src={location}
                    />
                    <h3>حلب - سوريا</h3>
                  </div>

                  <div className="flex items-center gap-5 p-3">
                    <img
                      className="w-5 h-5 object-contain shrink-0"
                      src={phone}
                    />
                    <a href="tel:+96584112365" dir="">
                      {' '}
                      +965 841 123 65
                    </a>
                  </div>

                  <div className="flex items-center gap-5 p-3">
                    <img
                      className="w-5 h-5 object-contain shrink-0"
                      src={meeseg}
                    />
                    <a href="mailto:info@media.com" >
                      info@media.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl w-full flex flex-col sm:flex-row justify-between items-center gap-6 shadow mt-12 p-5 sm:px-8 lg:px-14 bg-gradient-to-br from-[#115189] to-[#4f1175]">
              <form className="flex flex-col items-start gap-2 w-full sm:w-auto">
                <label htmlFor="footer-email" className="py-2 ">
                  {' '}
                  ابدأ معنا
                </label>
                <input
                  id="footer-email"
                  className="bg-white w-full max-w-[190px] px-4 py-2 rounded text-gray-800 text-xs outline-none  focus:ring-yellow-400"
                  type="email"
                  placeholder="الإيميل"
                />
              </form>

              <div className="flex flex-col items-start">
                <p className="py-2">تابعنا</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <img
                    className="w-6 h-6 object-contain"
                    src={telegram}
                    alt="Telegram"
                  />
                  <img
                    className="w-6 h-6 object-contain"
                    src={instgram}
                    alt="Instagram"
                  />
                  <img
                    className="w-6 h-6 object-contain"
                    src={facebook}
                    alt="Facebook"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-xs leading-6 mt-8">
              {' '}
              جميع الحقوق المحفوظة 2026 شركة ميديا. تم التطوير بواسطة
              <span dir="">DEVM MND</span>
            </p>
          </div>

          <div className="order-3 shrink-0">
            <img
              className="w-28 sm:w-36 lg:w-40 max-w-full object-contain"
              src={asidefooter}
              alt=""
            />
          </div>
        </div>
      </footer>
    
    </>

  );
};

export default Footer;
