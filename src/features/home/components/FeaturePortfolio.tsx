
import { projectsData } from "../../../../src/features/portfolio/data"
import SectionTitle from '../../../components/ui/SectionTitle';
import { motion } from 'motion/react';
const FeaturePortfolio = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <div className="  px-10 md:px-5 ">
        <div className='lg:ps-44 px-10 sm:px-32'>
          <SectionTitle title='معرض أعمالنا' subtitle="نماذج من مشاريعنا التي تصنع فرقا" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-10 mt-16 mb-5"
        >
          {projectsData.slice(0, 6).map((project: Project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.0 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className=" rounded-lg  w-70 lg:w-70 xl:w-[350px] lg:h-96 ">
              <img loading="lazy" src={project.image} alt={project.title} className="h-[280px] w-full object-cover rounded-[15px] mb-5 " />
              <div className="flex items-center justify-between">
                <div className=''>
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>

                  <p className="text-[13px] text-gray-500 mb-5">{project.subtitle}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-700 hover:to-purple-800 text-white w-8 h-8 rounded-full flex items-center justify-center p-3 flex-shrink-0 ml-5">
                  <img src={project.icon} alt="icon" className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div >
    </>
  );
};

export default FeaturePortfolio;
