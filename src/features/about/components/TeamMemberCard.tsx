import React from 'react';
import { TeamMember } from '../types/about.types';
interface TeamMemberCardProps {
  member: TeamMember;
}
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <>
      <div className=" flex py-5  flex-col justify-center items-center gap-3 text-white    ">
        <img className="  rounded-full w-32 h-32  object-cover  " src={member.photo} alt="img" loading="lazy"/>
        <h1 className="font-extrabold">{member.name}</h1>
        <h2>{member.role}</h2>
      </div>
    </>
  );
};

export default TeamMemberCard;
