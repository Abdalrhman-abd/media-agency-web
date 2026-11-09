import React from 'react'
import { servicesData } from '../types/data'
import SectionHero from '../../../components/ui/SectionHero'
import SectionTitle from '../../../components/ui/SectionTitle'
import Card from '../../../components/ui/Card'
import { Reveal } from '../../../components/ui/Reveal'

const ServicesPage = () => {
    const sortedServices = [...servicesData].sort((a, b) => {
    const order = ["التصميم الإبداعي", "الإعلانات", "المطبوعات"];

    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  return (
    <>
      <section>
        <div className="flex justify-center items-center">
          <SectionHero
            title=" خدماتنا"
            subtitle="ثلاثه مسارات متكامله التصميم الاعلانات والامطبوعات  تجارب ابداعيه مخصصه تساعدك على تمييز والظهور"
            variant="stacked"
            className="brand-gradient py-20"
          />
        </div>
      </section>
      <div>
        {sortedServices.map((category) => (
          <section key={category.id} className="py-12">

            <Reveal direction="up" delay={0.1}>
              <SectionTitle
                title={category.title}
                subtitle={category.subtitle}
                align="center"
                variant="inline"
              />
            </Reveal>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {
                category.services.map((service, index) => (
                  <Reveal key={service.id} direction="up" delay={0.1 * (index + 1)}>
                    <Card
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      iconBg={service.iconBg}
                      linkText={service.linkText}
                      linkUrl={service.linkUrl}
                      className="w-[350px] h-[330px]"
                    />
                  </Reveal>
                ))
              }
            </div>


          </section>
        ))}
      </div>



    </>
  )
}

export default ServicesPage