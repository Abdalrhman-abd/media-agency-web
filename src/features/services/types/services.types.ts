export interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  iconBg?: string;
}

export interface ServiceCategory {
  id: number;
  title: string;
  subtitle: string;

  services: ServiceCard[];
}