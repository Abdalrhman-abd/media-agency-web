import React from 'react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'لا توجد بيانات',
  message = 'عذراً، لا توجد عناصر لعرضها حالياً.',
  icon,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      {icon ? (
        <div className="mb-4 text-gray-400">{icon}</div>
      ) : (
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
          📂
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
        {message}
      </p>
    </div>
  );
};