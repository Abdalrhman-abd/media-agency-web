 import type { MediaRef } from "../../../shared/types/media";
 
export interface SocialLinks {
  linkedin?: string;
  instagram?: string;
}
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: MediaRef;
  socialLinks: SocialLinks;
}



export type TeamLead = {
  name: string;
  role: string;
  photo: string;
  description: string;
};






