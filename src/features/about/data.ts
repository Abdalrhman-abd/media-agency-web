import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'
import image7 from '../../assets/images/image7.png'
import image8 from '../../assets/images/image8.png'
import image9 from '../../assets/images/image9.png'
import image10 from '../../assets/images/image10.png'
import image11 from '../../assets/images/image11.png'

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  images?: string[]; // مصفوفة لتستوعب عدة صور
}

export const statsData: StatItem[] = [
  {
    id: '1',
    value: '12',
    label: 'الخبراء والمبدعون',
    description: 'فريق متكامل يعمل بشغف لخدمتك.',
    images: [image4, image5, image6], // 3 صور للكرت الأول
  },
  {
    id: '2',
    value: '179',
    label: 'عملاؤنا',
    description: 'وضعوا ثقتهم في حلولنا الإبداعية.',
    images: [image7, image8, image9], // 3 صور للكرت الثاني
  },
  {
    id: '3',
    value: '304',
    label: 'المشاريع المنجزة',
    description: 'تم تنفيذها بأعلى معايير الجودة والاحترافية.',
    images: [image10, image11, image4], // 3 صور للكرت الثالث
  },
  {
    id: '4',
    value: '2019',
    label: 'سنة التأسيس',
    description: 'أكثر من 5 سنوات في هذا المجال.',
    images: [image5, image6, image7], // 3 صور للكرت الرابع
  },
];