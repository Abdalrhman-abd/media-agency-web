import SectionHero from '../../../components/ui/SectionHero';
import StatCard from '../components/StatCard';
import { statsData } from '../data';
import officeimg from '../../../assets/images/officeimg.png';
import SectionTitle from '../../../components/ui/SectionTitle';
import TeamSection from '../components/TeamSection';
import { Reveal } from '../../../components/ui/Reveal';

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
          <Reveal direction="right" delay={0.1}>
            <SectionTitle
              calssName="leading-relaxed [&_h2]:text-4xl [&_h2]:sm:text-5xl [&_p]:text-base [&_p]:sm:text-lg [&_p]:md:text-xl"
              title="قصتنا"
              subtitle="بدأت رحلتنا بفكرة بسيطة... أن نقدم حلولاً إبداعية متكاملة في عالم التصميم والمطبوعات والإعلانات. ومنذ ذلك الحين نحن نعمل بشغف لنكون الخيار الأول لعملائنا في حلب وما حولها، من خلال فريق محترف وتقنيات حديثة وخبرة متنامية في السوق."
            />
          </Reveal>
        </div>
        
        <div className="w-4/5 sm:w-3/4 md:w-5/12 mr-auto ml-0 p-0">
          <Reveal direction="left" delay={0.2}>
            <img src={officeimg} alt="image" className="w-full h-full object-cover block" />
          </Reveal>
        </div>
      </section>

      <section className='pb-20 px-10 md:px-35 mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
          {statsData.map((stat, index) => (
            <Reveal key={stat.id} direction="up" delay={0.1 * (index + 1)}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal direction="up" delay={0.2}>
        <TeamSection />
      </Reveal>
    </>
  );
};

export default AboutPage;