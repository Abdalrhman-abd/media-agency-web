import React from 'react'
import SectionHero from '../../../components/ui/SectionHero';
import StatCard from '../components/StatCard';
import { statsData } from '../data';
import officeimg from '../../../assets/images/officeimg.png'
import SectionTitle from '../../../components/ui/SectionTitle';


const AboutPage = () => {
  return (
    <>
      <section>
        <div className='flex justify-center items-center'>
          <SectionHero title='من نحن' subtitle='شريكك الإبداعي في عالم التصميم والطباعة والإعلانات' variant='stacked' buttonText='تعرف على أعمالنا' className="brand-gradient py-20" />
        </div>
      </section>

      <section className=''>
        <div className='flex w-full flex-row justify-between items-center'>
          <div className='w-full mr-35 '>
            <SectionTitle calssName='text-2xl mt-30 leading-11' title='قصتنا' subtitle='بدأت رحلتنا بفكرة بسيطة... أن نقدم حلولاً إبداعية متكاملة في عالم التصميم والمطبوعات والإعلانات. ومنذ ذلك الحين نحن نعمل بشغف لنكون الخيار الأول لعملائنا في حلب وما حولها، من خلال فريق محترف وتقنيات حديثة وخبرة متنامية في السوق.' />
          </div>
          <div className='w-500'>
            <img src={officeimg} alt="image" className='w-400' />
          </div>
        </div>
      </section>
      <section className='pb-20 px-10 md:px-35 mt-40'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage