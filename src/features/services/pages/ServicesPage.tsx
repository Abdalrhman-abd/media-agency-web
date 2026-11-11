import React from 'react';
import SectionHero from '../../../components/ui/SectionHero';
import SectionTitle from '../../../components/ui/SectionTitle';
import Card from '../../../components/ui/Card';
import { Reveal } from '../../../components/ui/Reveal';
import { useServices } from '../api/useServices';
import { ServiceItem } from '../types/services.types';

// استيراد المكونات التي أنشأناها لحالات التحميل والأخطاء
import { CardSkeleton } from '../../../shared/ui/Skeleton';
import { ErrorState } from '../../../shared/ui/ErrorState';
import { EmptyState } from '../../../shared/ui/EmptyState';

const ServicesPage = () => {
  const { data, isLoading, error, refetch } = useServices();

  const apiServices: ServiceItem[] = Array.isArray(data) 
    ? data 
    : (data as any)?.data || [];

  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <SectionHero
            title="خدماتنا"
            subtitle="حلول إبداعية متكاملة ومخصصة لمساعدتك على التميز والظهور"
            variant="stacked"
            className="brand-gradient py-20"
          />
        </div>
      </section>

      <section className="py-12">
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            title="جميع الخدمات"
            subtitle="استعرض كافة خدماتنا المتاحة للارتقاء بعلامتك التجارية"
            align="center"
            variant="inline"
          />
        </Reveal>

        {isLoading ? (
          // استخدام CardSkeleton المتطابقة مع مقاس كروت الخدمات لتجنب اهتزاز الصفحة
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
              {[1, 2, 3].map((n) => (
                <CardSkeleton key={n} />
              ))}
            </div>
          </div>
        ) : error ? (
          // استخدام مكون الـ ErrorState الاحترافي مع زر إعادة المحاولة
          <ErrorState 
            title="تعذر تحميل الخدمات" 
            message="حدث خطأ أثناء جلب البيانات من السيرفر. يرجى المحاولة مرة أخرى."
            onRetry={() => refetch()} 
          />
        ) : apiServices.length === 0 ? (
          // استخدام مكون الـ EmptyState عندما تكون القائمة فارغة
          <EmptyState 
            title="لا توجد خدمات متاحة" 
            message="نعمل حالياً على تجهيز خدمات جديدة، يرجى العودة لاحقاً."
          />
        ) : (
          /* تم ضبط الحاوية هنا لتنظيم الكروت وكسرها بشكل متجاوب تماماً كما في تصميمك */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
              {apiServices.map((service, index) => (
                <Reveal key={service.id} direction="up" delay={0.1 * (index + 1)}>
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
    </>
  );
};

export default ServicesPage;