import React from 'react';
import {projectsData } from "../../../../src/features/portfolio/data"
import SectionTitle from '../../../components/ui/SectionTitle';
const FeaturePortfolio = () => {
  return (
    <>
      <div className="  px-10 md:px-5 ">
        <div className='lg:ps-44 px-10 sm:px-32'>
        <SectionTitle title='معرض اعمالنا' subtitle="نماذج من مشاريعنا التي تصنع فرقا"  />
       </div>
              <div className="flex flex-wrap justify-center gap-10  my-16">
                  {projectsData.slice(0, 6).map((project: Project) => (
                    <div key={project.id} className=" rounded-lg w-70 lg:w-[350px] lg:h-96 ">
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
                    </div>
                  ))}
                </div>
      
      </div>
    </>
  );
};

export default FeaturePortfolio;
