import React from 'react';

interface SuccessCardProps {
  onReset: () => void;
  reference?: string;
}

export const SuccessCard: React.FC<SuccessCardProps> = ({ onReset, reference }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 shadow-sm text-center max-w-lg mx-auto my-12">
        <div className="w-16 h-16 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">تم استلام طلب الحجز بنجاح!</h3>
        <p className="text-gray-600 text-sm mb-6">
          شكراً لتواصلك معنا. سنقوم بمراجعة تفاصيل طلبك والتواصل معك في أقرب وقت لتأكيد الموعد.
        </p>
        {reference && (
          <p className="text-sm font-semibold text-gray-700">
            رقم المرجع: {reference}
          </p>
        )}
      </div>
      <button
        onClick={onReset}
        className="px-2 py-3 text-white rounded-xl font-medium transition"
      >
        حجز موعد جديد
      </button>
    </>
  );
};