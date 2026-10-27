import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Button from '../ui/Button.tsx'
import { useState, useEffect } from 'react';

interface ServiceOption {
  title: string;
  path: string;
}

const servicesList: ServiceOption[] = [
  { title: 'التصميم الإبداعي', path: '' },
  { title: 'المطبوعات', path: '' },
  { title: 'الإعلانات', path: '' },
];

const Navbar: React.FC = () => {
  const [scroll, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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

  return (
    <>
      <header className={`flex w-full fixed z-50 justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 lg:p-9 ${scroll ? 'bg-[#D9D9D980] shadow-lg py-2 lg:py-2' : 'bg-transparent'}`}>
        <img src={logo} alt="logo" className='w-10 sm:w-12 lg:w-13.75 shrink-0' />
        <nav className='hidden lg:flex'>
          <Link className='hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text p-3 inline-block px-7 text-xl' to="/">الرئيسية</Link>
          <Link className='hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text p-3 inline-block px-7 text-xl' to="/about ">من نحن</Link>
          <div className="relative inline-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button
              onClick={() => navigate('/services')}
              className="flex items-center gap-1.5 p-3 px-7 text-xl hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 transition-all cursor-pointer"
            >
              <span className='hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text inline-block text-xl'>الخدمات</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-4 border border-gray-100 z-50 text-gray-800">
                {servicesList.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className='hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text p-3 inline-block px-7 text-xl' to="/PortfolioPage">معرض الأعمال</Link>
          <Link className='hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text p-3 inline-block px-7 text-xl' to="/ContactPage">اتصل بنا</Link>
        </nav>
        <div className='hidden lg:block'>
          <Button text="احجز استشارة" onClick={() => console.log('تم الضغط')} />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-2xl shrink-0' aria-label="فتح القائمة">
          {isOpen ? '✕' : '☰'}
        </button>
      </header>
      {isOpen && (
        <nav className='fixed top-0 right-0 z-40 flex h-screen w-64 max-w-[85vw] flex-col gap-2 overflow-y-auto bg-white/80 backdrop-blur-md p-5 pt-20 shadow-xl lg:hidden'>
          <Link className='p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text' to="/" onClick={() => setIsOpen(false)}>الرئيسية</Link>
          <Link className='p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text' to="/about" onClick={() => setIsOpen(false)}>من نحن</Link>
          <button className='p-3 text-sm text-right rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text' onClick={() => navigate('/services ')}>الخدمات</button>
           <svg
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? '' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
          {servicesList.map((service, index) => (
            <Link key={index} to={service.path} onClick={() => setIsOpen(false)} className='pr-7 py-2 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text'>{service.title}</Link>
          ))}
          <Link className='p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text' to="/PortfolioPage" onClick={() => setIsOpen(false)}>معرض الأعمال</Link>
          <Link className='p-3 text-sm rounded-lg hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:bg-clip-text' to="/ContactPage" onClick={() => setIsOpen(false)}>اتصل بنا</Link>
          <div className='mt-2'>
            <Button text="احجز استشارة" onClick={() => console.log('تم الضغط')} />
          </div>
        </nav>
      )}
    </>
  )
}
export default Navbar
