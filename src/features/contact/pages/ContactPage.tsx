import SectionHero from '../../../components/ui/SectionHero';
import ContactInfo from '../components/ContactInfo';
import SectionTitle from '../../../components/ui/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../components/ContactForm';
const ContactPage = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <SectionHero
            title=" اتصل بنا "
            subtitle=" نحن مستعدون للاجابه عن استفسارتك ومساعدتك في تجهيز مشروعك بافضل نتيجهز"
            variant="stacked"
            className="brand-gradient py-20"
          />
        </div>

        <div className="min-h-[50vh]  mt-10  flex flex-col justify-center items-center gap-10 lg:gap-20 py-10 lg:py-20">
          <div className="flex justify-around items-start gap-10 w-full flex-col lg:flex-row  px-5 ">
            <div>
              <SectionTitle title="معلومات الاتصال" />
              <ContactInfo />
            </div>
            <div >
              <SectionTitle title="تابعنا" />


              <div className="flex items-center justify-center gap-4 mt-5 ms-3 ">
                <a href="">
                  <FontAwesomeIcon icon={faTelegram} className='text-2xl object-contain ' />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} className='text-2xl object-contain' />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} className='text-2xl object-contain' />
                </a>
              </div>
            </div>
          </div>

        </div>
        <ContactForm />

        <div>
          <div className="my-10 mb-30">
            <iframe className='m-auto  rounded-4xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103022.83682047778!2d37.06615142134735!3d36.20392390873521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813b98135af%3A0x967e5e5fc542c32a!2sAleppo%2C%20Syria!5e0!3m2!1sen!2sin!4v1793704900134!5m2!1sen!2sin" width="80%" height="450" loading="lazy" ></iframe>
          </div>
        </div>


      </section>

    </>
  )
}

export default ContactPage

