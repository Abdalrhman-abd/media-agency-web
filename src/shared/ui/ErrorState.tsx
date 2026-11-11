import React from 'react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'حدث خطأ في جلب البيانات',
  message = 'تعذر الاتصال بالسيرفر أو تحميل البيانات المطلوبة. يرجى المحاولة مرة أخرى.',
  onRetry,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className="w-16 h-16 mb-4 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
        ⚠️
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-6">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:opacity-90 transition shadow-sm"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
};