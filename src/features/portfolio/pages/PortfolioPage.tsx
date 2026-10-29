import React from 'react';
import { Link } from 'react-router-dom'; // 1. استيراد Link
import { projectsData } from '../data';
import { Project } from '../types';
import SectionTitle from '../../../components/ui/SectionTitle';
import Vector2 from '../../../assets/images/Vector2.png';
import icon9 from '../../../assets/images/icon9.png';

const PortfolioPage = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className=' mb-8 py-10 ml-0 sm:ml-180'>
        <SectionTitle title='معرض أعمالنا' />
      </div>
      <div className="flex flex-wrap justify-center gap-5 max-w-5xl">
        {projectsData.map((project: Project) => (
          /* 2. تغليف الكرت بـ Link الموجه لصفحة تفاصيل المشروع بالـ id الخاص به */
          <Link to={`/portfolio/${project.id}`} key={project.id} className="block">
            <div className=" rounded-lg w-70 ms:w-70 ">
              <img src={project.image} alt={project.title} className="h-50 w-full object-cover rounded-[15px] mb-5" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-[13px] text-gray-500 mb-5">{project.subtitle}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-700 hover:to-purple-800 text-white w-8 h-8 rounded-full flex items-center justify-center p-3 flex-shrink-0 ml-5">
                  <img src={project.icon} alt="icon" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-col '>
        <div className='flex items-center gap-4 p-8 ml-0 sm:mr-200'>
          <img src={Vector2} alt="icon" className='w-10 '/>
          <img src={icon9} alt="icon" className='w-11'/>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;