import { TeamLead } from '../types/about.types';
import SectionTitle from '../../../components/ui/SectionTitle';
interface TeamLeadCardProps {
  lead: TeamLead;
}
const TeamLeadCard: React.FC<TeamLeadCardProps> = ({ lead }) => {
  return (
    <>
      <div className=" flex justify-around items-start lg:gap-32 md:gap-16 gap-5 flex-wrap ">
        <div className="flex flex-col gap-4 lg:w-[500px] md:w-[400px] w-[300px]  px-5 pt-10">
          <div className="lg:my-10 py-3">
            <SectionTitle title="فريقنا" />
          </div>
          <h1 className="text-2xl font-bold">{lead.name}</h1>
          <h2 className="text-brand-blue py-2 font-bold">{lead.role}</h2>
          <p className="text-text-secondary lg:leading-10  lg:text-xl text-[18px] ">
            {lead.description}
          </p>
        </div>
        <img
          className="lg:w-96 md:w-60  w-56  object-cover "
          src={lead.photo}
          alt=""
        />
      </div>
    </>
  );
};

export default TeamLeadCard;
