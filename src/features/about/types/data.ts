import type { TeamLead, TeamMember } from './../types/about.types';

import lead from '../../../assets/images/lead.png';
export const teamLead: TeamLead = {
  name: 'أحمد محمد',
  role: 'المدير التنفيذي والمؤسس',
  photo: lead,
  description:
    'يقود أحمد فريق  برؤية طموحة وخبرة واسعة في إدارة المشاريع وتطوير الأعمال.العمل برؤية وتطوير الأعمال.',
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'سارة أحمد',
    role: 'مصممة واجهات المستخدم',
    photo: lead,
  },
  {
    id: 2,
    name: 'محمد خالد',
    role: 'مطور واجهات أمامية',
    photo: lead,
  },
  {
    id: 3,
    name: 'نور الدين سامي',
    role: 'مصمم جرافيك',
    photo: lead,
  },
  {
    id: 4,
    name: 'ريم مصطفى',
    role: 'مديرة إدارة المشاريع',
    photo: lead,
  },
  {
    id: 5,
    name: 'ريم مصطفى',
    role: 'مديرة إدارة المشاريع',
    photo: lead,
  },
];
