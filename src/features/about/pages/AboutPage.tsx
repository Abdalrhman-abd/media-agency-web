import SectionHero from '../../../components/ui/SectionHero';
import StatCard from '../components/StatCard';
import { statsData } from '../data';
import officeimg from '../../../assets/images/officeimg.png';
import SectionTitle from '../../../components/ui/SectionTitle';
import TeamSection from '../components/TeamSection';

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <SectionHero
            title="من نحن"
            subtitle="شريكك الإبداعي في عالم التصميم والطباعة والإعلانات"
            variant="stacked"
            buttonText="تعرف على أعمالنا"
            className="brand-gradient py-20"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row w-full justify-between items-start md:items-center overflow-hidden">
        <div className="w-full md:w-7/12 px-10 md:px-35 py-6 md:py-0">
          <SectionTitle
            calssName="leading-relaxed [&_h2]:text-4xl [&_h2]:sm:text-5xl [&_p]:text-base [&_p]:sm:text-lg [&_p]:md:text-xl"
            title="قصتنا"
            subtitle="بدأت رحلتنا بفكرة بسيطة... أن نقدم حلولاً إبداعية متكاملة في عالم التصميم والمطبوعات والإعلانات. ومنذ ذلك الحين نحن نعمل بشغف لنكون الخيار الأول لعملائنا في حلب وما حولها، من خلال فريق محترف وتقنيات حديثة وخبرة متنامية في السوق."
          />
        </div>
        <div className="w-4/5 sm:w-3/4 md:w-5/12 mr-auto ml-0 p-0">
          <img src={officeimg} alt="image" className="w-full h-full object-cover block" />
        </div>
      </section>

      <section className='pb-20 px-10 md:px-35 mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>
      <TeamSection />
    </>
  );
};

export default AboutPage;