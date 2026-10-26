export interface StatItem {
  id: string;
  value: string;
  label: string;
  subLabel?: string;
  avatars?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  isLeader?: boolean;
  bio?: string;
}
