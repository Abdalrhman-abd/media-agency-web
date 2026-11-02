// import React from 'react';
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