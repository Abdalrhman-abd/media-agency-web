import React from 'react';
import HeroSection from '../components/HeroSection';
import SolutionsBanner from '../components/SolutionsBanner';
import TestimonialsSlider from '../components/testimonials/copmmponents/TestimonialsSlider';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '../../../components/ui/Reveal';
import Card from '../../../components/ui/Card';
import SectionTitle from '../../../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

// استيراد الهوكس حسب المسارات الصحيحة لديك
import { useServices } from '../../services/api/useServices';
import { useProjects } from '../../portfolio/api/useProjects'; // تأكد أن المسار يطابق مكان وجود الهوك لديك

// استيراد مكونات الحالات والـ Skeletons
import { CardSkeleton } from '../../../shared/ui/Skeleton';
import { ErrorState } from '../../../shared/ui/ErrorState';
import { EmptyState } from '../../../shared/ui/EmptyState';

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();
  const MotionLink = motion(Link);

  // 1. جلب بيانات الخدمات
  const { 
    data: servicesData, 
    isLoading: isServicesLoading, 
    error: servicesError, 
    refetch: refetchServices 
  } = useServices();

  const apiServices: any[] = Array.isArray(servicesData) 
    ? servicesData 
    : (servicesData as any)?.data || [];

  // 2. جلب بيانات المشاريع (نطلب أول 4 مشاريع مثلاً أو المميزة منها)
  const { 
    data: projectsData, 
    isLoading: isProjectsLoading, 
    error: projectsError, 
    refetch: refetchProjects 
  } = useProjects({ limit: 4 }); // أو يمكنك تمرير { featured: true } حسب ميزات الـ API لديك

  const apiProjects: any[] = Array.isArray(projectsData) 
    ? projectsData 
    : (projectsData as any)?.data || [];

  return (
    <div className="overflow-x-hidden w-full">
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 5 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: 'easeOut',
        }}
      >
        {/* قسم الهيرو */}
        <Reveal direction="up" delay={0.1}>
          <HeroSection />
        </Reveal>

        {/* قسم الخدمات المميزة */}
        <section className="py-12">
          <Reveal direction="up" delay={0.2}>
            <SectionTitle
              title="خدماتنا المميزة"
              subtitle="حلول إبداعية متكاملة ومخصصة لمساعدتك على التميز والظهور"
              align="center"
              variant="inline"
            />
          </Reveal>

          {isServicesLoading ? (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                {[1, 2, 3].map((n) => (
                  <CardSkeleton key={n} />
                ))}
              </div>
            </div>
          ) : servicesError ? (
            <ErrorState 
              title="تعذر تحميل الخدمات" 
              message="حدث خطأ أثناء جلب البيانات. يرجى المحاولة مرة أخرى."
              onRetry={() => refetchServices()} 
            />
          ) : apiServices.length === 0 ? (
            <EmptyState 
              title="لا توجد خدمات متاحة" 
              message="نعمل حالياً على تجهيز خدمات جديدة."
            />
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                {apiServices.slice(0, 3).map((service, index) => (
                  <Reveal key={service.id || index} direction="up" delay={0.1 * (index + 1)}>
                    <Card
                      title={service.title}
                      description={service.summary}
                      icon={service.icon?.url || undefined}
                      linkText="اكتشف المزيد"
                      linkUrl={`/services/${service.slug}`}
                      className="w-[350px] h-[330px]"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* قسم معرض الأعمال في الرئيسية */}
        <section className="py-12">
          <div className='mb-8 py-6 lg:pr-52 md:pr-36 pr-10'>
            <Reveal direction="right" delay={0.1}>
              <SectionTitle title='معرض أعمالنا' align='left' />
            </Reveal>
          </div>

          {isProjectsLoading ? (
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex flex-wrap justify-center gap-5">
                {[1, 2, 3, 4].map((n) => (
                  <CardSkeleton key={n} />
                ))}
              </div>
            </div>
          ) : projectsError ? (
            <ErrorState 
              title="تعذر تحميل المشاريع" 
              message="حدث خطأ أثناء جلب بيانات معرض الأعمال."
              onRetry={() => refetchProjects()} 
            />
          ) : apiProjects.length === 0 ? (
            <EmptyState 
              title="لا توجد مشاريع متاحة" 
              message="عذراً، لا توجد مشاريع حالياً."
            />
          ) : (
            <div className="flex flex-wrap justify-center gap-5 max-w-7xl m-auto px-4">
              {apiProjects.map((project: any, index: number) => (
                <Reveal
                  key={project.id || index} 
                  direction="up" 
                  delay={0.05 * (index + 1)}
                >
                  <MotionLink
                    to={`/portfolio/${project.id}`}
                    whileHover={{ y: -8, scale: 1.0 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="rounded-lg w-70 lg:w-70 xl:w-[350px] lg:h-96 group cursor-pointer block"
                  >
                    <img 
                      src={project.cover?.url || project.image} 
                      alt={project.title} 
                      className="w-70 lg:w-70 xl:w-[350px] h-[280px] w-full object-cover rounded-[15px] mb-5" 
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
          )}
        </section>

        {/* بانر الحلول */}
        <Reveal direction="up" delay={0.2}>
          <SolutionsBanner />
        </Reveal>

        {/* شريط آراء العملاء */}
        <Reveal direction="up" delay={0.2}>
          <TestimonialsSlider />
        </Reveal>
      </motion.div>
    </div>
  );
};

export default HomePage;