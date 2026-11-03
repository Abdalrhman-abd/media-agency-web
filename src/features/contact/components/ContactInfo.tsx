import phone2 from '../../../assets/images/phone2.png'
import location2 from '../../../assets/images/location2.png'
import meesge2 from '../../../assets/images/meesge2.png'

const ContactInfo = () => {
  return (
    <>

      <div className="mt-3">
        <div className="flex items-center gap-5 p-3">
          <img
            className="w-5 h-5 object-contain shrink-0"
            src={location2} alt="Location"
          />
          <h3>حلب - سوريا</h3>
        </div>

        <div className="flex items-center gap-5 p-3">
          <img
            className="w-5 h-5 object-contain shrink-0"
            src={phone2}
          />
          <a href="tel:+96584112365" dir="" target="_blank" rel="noopener noreferrer">
            {' '}
            +965 841 123 65
          </a>
        </div>

        <div className="flex items-center gap-5 p-3">
          <img
            className="w-5 h-5 object-contain shrink-0"
            src={meesge2}
          />
          <a href="mailto:info@media.com" target="_blank" rel="noopener noreferrer">
            info@media.com
          </a>
        </div>
      </div>

    </>
  )
}

export default ContactInfo

