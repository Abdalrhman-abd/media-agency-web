import React from 'react';
import SectionHero from '../../../components/ui/SectionHero';
import SectionTitle from '../../../components/ui/SectionTitle';
import Card from '../../../components/ui/Card';
import { Reveal } from '../../../components/ui/Reveal';
import { useServices } from '../api/useServices';
import { ServiceItem } from '../types/services.types';

const ServicesPage = () => {
  const { data, isLoading, error } = useServices();

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
          <div className="flex justify-center items-center py-20">
            <p className="text-lg font-medium">جاري تحميل الخدمات...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-red-500 font-medium">حدث خطأ أثناء جلب البيانات من السيرفر.</p>
          </div>
        ) : apiServices.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 font-medium">لا توجد خدمات متاحة حالياً.</p>
          </div>
        ) : (
          /* تم ضبط الحاوية هنا لتنظيم الكروت وكسرها بشكل متجاوب (Responsive) تماماً مثل تصميمك القديم */
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