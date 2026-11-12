
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '../ui/Button.tsx';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher.tsx';
import { navigationLinks } from '../layout/navigation.ts';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceOption {
  title: string;
  path: string;
  key: string;
}

const servicesList: ServiceOption[] = [
  { title: 'التصميم الإبداعي', path: '/services', key: 'creativeDesign' },
  { title: 'المطبوعات', path: '/services', key: 'prints' },
  { title: 'الإعلانات', path: '/services', key: 'advertising' },
];

const Navbar: React.FC = () => {
  const [scroll, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith('ar');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinkClass = `transition-all ${isHome ? "text-black" : "text-white hover:text-white"
    }`;

  return (
    <>
      <header
        dir={isArabic ? 'rtl' : 'ltr'}
        className={`flex w-full fixed z-50 justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 lg:p-9 ${scroll ? 'bg-[#a09b9b80] shadow-lg py-2 lg:py-2 ' : 'bg-transparent'
          }`}
      >
        <img
          src={logo}
          alt="logo"
          className={`w-10 sm:w-12 lg:w-13.75 shrink-0 ${isHome ? '' : 'brightness-0 invert'
            }`}
        />

        <nav className="hidden lg:flex">
          {navigationLinks.map((link) => {
            if (link.path === '/services') {
              return (
                <div
                  key={link.path}
                  className="relative inline-block"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <button
                    onClick={() => navigate('/services')}
                    className={`flex items-center gap-1.5 p-3 px-7 text-xl transition-all hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text ${isHome ? "" : "!text-white hover:!text-white hover:!bg-none"
                      }`}
                  >
                    <span>{t(link.label)}</span>

                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute top-full right-0 z-50 w-48 rounded-xl border border-gray-100 bg-white/95 py-4 text-black shadow-xl backdrop-blur-md">
                      {servicesList.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2.5 text-sm hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                        >
                          {t(service.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${navLinkClass} inline-block p-3 px-7 text-xl hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text`}
              >
                {t(link.label)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            text={t('bookConsultation')}
            onClick={() => navigate('/book-consultation')}
          />
          <LanguageSwitcher />
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl shrink-0"
            aria-label={t('openMenu')}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            dir={isArabic ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, x: isArabic ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isArabic ? 100 : -100 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={`fixed top-0 z-40 flex h-screen w-64 max-w-[85vw] flex-col gap-2 overflow-y-auto bg-white/80 backdrop-blur-md p-5 pt-20 shadow-xl lg:hidden ${isArabic ? 'right-0' : 'left-0'
              }`}
          >
            <nav className="flex flex-col gap-2">
              <Link
                className="p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>

              <Link
                className="p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>

              <button
                className="p-3 text-sm text-start rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                onClick={() => {
                  navigate('/services');
                  setIsOpen(false);
                }}
              >
                {t('services')}
              </button>

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="pr-7 py-2 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                >
                  {t(service.key)}
                </Link>
              ))}

              <Link
                className="p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                to="/PortfolioPage"
                onClick={() => setIsOpen(false)}
              >
                {t('gallerybusiness')}
              </Link>

              <Link
                className="p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                to="/ContactPage"
                onClick={() => setIsOpen(false)}
              >
                {t('contactus')}
              </Link>
            </nav>

            <div className="mt-2 flex flex-col items-start gap-4">
              <Button
                text={t('bookConsultation')}
                className="brand-gradient hover:from-blue-700 hover:to-purple-800 text-white"
                onClick={() => navigate('/book-consultation')}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>

  );
};

export default Navbar;
