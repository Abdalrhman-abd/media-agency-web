import React from 'react';
import SectionTitle from '../../../components/ui/SectionTitle';
import TeamLeadCard from './TeamLeadCard';
import TeamMemberCard from './TeamMemberCard';
import { teamLead, teamMembers } from '../types/data';
const TeamSection = () => {
  return (
    <>
      <section className=" min-h-[100vh] flex flex-col  gap-10 pt-10">
        <TeamLeadCard lead={teamLead} />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5  brand-gradient  rounded-4xl p-5 gap-5 flex justify-center items-center flex-wrap   lg:mt-[-150px] md:mt-[-100px] mt-[-50px] mb-10 lg:mx-[140px] md:mx-[50px] mx-5 ">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamSection;
