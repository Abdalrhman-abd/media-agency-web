import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md relative overflow-hidden ${className}`}
      role="status"
      aria-label="جاري التحميل..."
    >
      {/* طبقة اللمعان المتحركة من اليمين لليسار */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
};

// مكون هيكل الكارت (CardSkeleton) مع توسيط العناصر وتعديل درجات الألوان إلى gray-400
export const CardSkeleton: React.FC = () => {
  return (
    <div className="w-[350px] h-[330px] p-4 rounded-xl border border-gray-200 dark:border-gray-200 bg-[#e8e8e84e] bg-[#e8e8e84e] shadow-sm flex flex-col justify-between items-center text-center">
      <div className="w-full flex flex-col items-center">
        {/* مكان الأيقونة أو الصورة (متموضعة في المنتصف) */}
        <Skeleton className="w-12 h-12 rounded-lg mb-4 bg-gray-100 dark:bg-gray-200" />
        
        {/* مكان العنوان (متموضع في المنتصف) */}
        <Skeleton className="w-3/4 h-6 mb-3 bg-gray-100 dark:bg-gray-200 mx-auto" />
        
        {/* مكان النص المختصر (متموضع في المنتصف) */}
        <Skeleton className="w-full h-4 mb-2 bg-gray-400 dark:bg-gray-200" />
        <Skeleton className="w-5/6 h-4 bg-gray-100 dark:bg-gray-200 mx-auto" />
      </div>

      {/* مكان الرابط أو الزر */}
      <div className="pt-4 w-full border-t border-gray-100 dark:border-gray-200 flex justify-center items-center">
        <Skeleton className="w-24 h-4 bg-gray-100 dark:bg-gray-200 mx-auto" />
      </div>
    </div>
  );
};