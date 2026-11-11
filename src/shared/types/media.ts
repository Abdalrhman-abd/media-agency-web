export interface MediaRef {
  id: string;
  url: string;
  type: 'IMAGE' | 'VIDEO' | 'DOCUMENT';
  width: number | null;
  height: number | null;
  alt: string | null;
}