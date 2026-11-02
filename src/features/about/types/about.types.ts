export interface StatItem {
  id: string;
  value: string;
  label: string;
  subLabel?: string;
  avatars?: string[];
}

// export interface TeamMember {
//   id: string;
//   name: string;
//   role: string;
//   avatarUrl: string;
//   isLeader?: boolean;
//   bio?: string;
// }



export type TeamLead = {
  name: string;
  role: string;
  photo: string;
  description: string;
};

// اشتقاق نوع عضو الفريق من TeamLead
export type TeamMember = Pick<TeamLead,
  "name" | "role" | "photo"> & {
  id: number;
};

