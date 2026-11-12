import { useTeam } from '../api/useTeam';

import TeamLeadCard from './TeamLeadCard';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = () => {
  const {
    data: teamMembers,
    isLoading,
    isError,
  } = useTeam();
  const firstMember = teamMembers?.[0];
  return (
    <section className="min-h-[100vh] flex flex-col gap-10 pt-10 mb-10">
   {firstMember && <TeamLeadCard lead={firstMember} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 brand-gradient rounded-4xl p-5 gap-5 justify-center items-center flex-wrap lg:mt-[-150px] md:mt-[-100px] mt-[-50px] mb-10 lg:mx-[140px] md:mx-[50px] mx-5">

        {isLoading && <p className="text-white">جاري تحميل الفريق...</p>}

        {isError && (
          <p className="text-white">حدث خطأ أثناء تحميل أعضاء الفريق.</p>
        )}

        {!isLoading && !isError && teamMembers?.length === 0 && (
          <p className="text-white">لا يوجد أعضاء فريق حالياً.</p>
        )}

        {teamMembers?.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}

      </div>
    </section>
  );
};

export default TeamSection;