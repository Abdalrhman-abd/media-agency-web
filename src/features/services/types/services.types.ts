export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  linkText: string;
  targetUrl: string;
}

export interface ServiceGroup {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  services: ServiceItem[];
}