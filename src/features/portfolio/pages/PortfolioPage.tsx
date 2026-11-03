import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Vector2 from '../../../assets/images/Vector2.png'
import icon9 from '../../../assets/images/icon9.png'
import PortfolioFilter from '../components/portfolioFilter';
import { useMemo, useState } from "react";
import { projectsData } from "../data";
import type { PortfolioCategory, Project } from "./../types";
import { useSearchParams } from 'react-router-dom';
import PortfolioPagination from '../components/PortfolioPagination';
const PortfolioPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const selectedCategory = (searchParams.get("category") as PortfolioCategory) || "all";

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return projectsData;
    }
    return projectsData.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(
    filteredProjects.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>

     <div className="mb-8 flex mt-40  max-w-2xl lg:mx-[20%]">
          <PortfolioFilter
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setCurrentPage(1);
              if (category === "all") {
                setSearchParams({});
              } else {
                setSearchParams({ category });
              }
            }}
          />
        </div>
      <div className="flex flex-col items-center py-10">
       
        <div className=' mb-8 py-10 ml-0 sm:ml-180'>
          <SectionTitle title='معرض أعمالنا' />
        </div>



        <div className="flex flex-wrap justify-center gap-5 max-w-5xl">
          {visibleProjects.map((project: Project) => (
            <div key={project.id} className=" rounded-lg w-70 ms:w-70 ">
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
          ))}
        </div>
        {filteredProjects.length > 0 && (
          <PortfolioPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );

};

export default PortfolioPage;