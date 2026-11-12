import type { MediaRef } from '../../../shared/types/media';

export interface SocialLinks {
  behance?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: MediaRef | null;
  socialLinks: SocialLinks;
}


export interface TeamLead {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: MediaRef | null;
  socialLinks: SocialLinks;
}