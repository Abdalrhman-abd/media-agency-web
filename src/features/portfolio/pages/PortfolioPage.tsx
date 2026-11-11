import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import sort from "../../../assets/images/sort.png"
import PortfolioFilter from '../components/portfolioFilter';
import { useMemo, useState } from "react";
import type { PortfolioCategory, Project } from "./../types/portfolio.types";
import { useSearchParams, Link } from 'react-router-dom';
import PortfolioPagination from '../components/PortfolioPagination';
import SectionHero from '../../../components/ui/SectionHero';
import { Reveal } from '../../../components/ui/Reveal';
import { motion } from 'motion/react';

// استيراد الهوك الخاص بجلب البيانات ومكونات الحالات
import { useProjects } from '../api/useProjects';
import { CardSkeleton } from '../../../shared/ui/Skeleton';
import { ErrorState } from '../../../shared/ui/ErrorState';
import { EmptyState } from '../../../shared/ui/EmptyState';

const PortfolioPage = () => {
  const MotionLink = motion(Link);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const selectedCategory = (searchParams.get("category") as PortfolioCategory) || "all";

  // استخدام TanStack Query لجلب المشاريع
  const { data, isLoading, error, refetch } = useProjects();

  const apiProjects: any[] = Array.isArray(data) 
    ? data 
    : (data as any)?.data || [];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return apiProjects;
    }
    return apiProjects.filter(
      (project) => project.category?.slug === selectedCategory || project.category === selectedCategory
    );
  }, [apiProjects, selectedCategory]);

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
      <div className="flex justify-center items-center">
        <SectionHero
          title=" معرض أعمالنا"
          subtitle=" حيث يلتقي الابداع بالنتائج الملموسه"
          variant="stacked"
          className="brand-gradient py-20"
        />
      </div>

      <Reveal direction="up" delay={0.1}>
        <div className="mb-8 flex gap-5 justify-between items-center mt-28 flex-wrap lg:mx-[14%] mx-5">
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
          <div>
            <img src={sort} alt="" width={40} />
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col py-10">

        <div className=' mb-8 py-10 lg:pr-52 md:pr-36 pr-10 '>
          <Reveal direction="right" delay={0.1}>
            <SectionTitle title='معرض أعمالنا' align='left' calssName='' />
          </Reveal>
        </div>

        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="flex flex-wrap justify-center gap-5">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <CardSkeleton key={n} />
              ))}
            </div>
          </div>
        ) : error ? (
          <ErrorState 
            title="تعذر تحميل المشاريع" 
            message="حدث خطأ أثناء جلب بيانات معرض الأعمال من السيرفر."
            onRetry={() => refetch()} 
          />
        ) : filteredProjects.length === 0 ? (
          <EmptyState 
            title="لا توجد مشاريع متاحة" 
            message="عذراً، لا توجد مشاريع مطابقة حالياً."
          />
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-5 max-w-7xl m-auto">
              {visibleProjects.map((project: any, index: number) => (
                <Reveal
                  key={project.id} 
                  direction="up" 
                  delay={0.05 * ((index % itemsPerPage) + 1)}
                >
                  <MotionLink
                    to={`/portfolio/${project.id}`}
                    whileHover={{ y: -8, scale: 1.0}}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="rounded-lg w-70 lg:w-70 xl:w-[350px] lg:h-96 group cursor-pointer block"
                  >
                    <img 
                      src={project.cover?.url || project.image} 
                      alt={project.title} 
                      className="w-70 lg:w-70 xl:w-[350px] h-[280px] w-full object-cover rounded-[15px] mb-5 " 
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-xl mb-2 transition-colors">{project.title}</h3>
                        <p className="text-[13px] text-gray-500 mb-5">{project.summary || project.subtitle}</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-700 hover:to-purple-800 text-white w-8 h-8 rounded-full flex items-center justify-center p-3 flex-shrink-0 ml-5">
                        <img src={project.icon || project.cover?.url} alt="icon" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </MotionLink>
                </Reveal>
              ))}
            </div>

            {totalPages > 1 && (
              <Reveal direction="up" delay={0.2}>
                <PortfolioPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </Reveal>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PortfolioPage;