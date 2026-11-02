import React, { forwardRef } from 'react';

interface PhoneFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  ({ label, error, required, id, name, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 focus-within:border-blue-500 focus-within:bg-white transition duration-200 overflow-hidden">
          {/* بادئة الدولة الثابتة */}
          <div className="flex items-center gap-1 px-4 py-3 bg-gray-100 border-e border-gray-200 text-gray-700 font-medium text-sm select-none">
            <span>🇸🇾</span>
            <span>+963</span>
          </div>

          {/* حقل الإدخال */}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type="tel"
            className="w-full px-4 py-3 bg-transparent outline-none text-gray-800"
            {...props}
          />
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

PhoneField.displayName = 'PhoneField';