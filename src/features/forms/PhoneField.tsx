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
        <label htmlFor={inputId} className="text-l font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <div className="flex items-center justify-start rounded-xl border border-[#5d1b9a]  focus-within:border-blue-500 focus-within:bg-white transition duration-200 overflow-hidden">
          <div className="flex items-center justify-start gap-1 px-4 py-3 border-e border-[#5d1b9a] text-gray-700 font-medium text-sm select-none">  
          <span>+963</span>
          </div>
          <input
            ref={ref}
            id={inputId}
            name={name}
            type="tel"
            className="w-full px-4  py-3 bg-transparent outline-none text-gray-800 text-right"
            {...props}
            />
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

PhoneField.displayName = 'PhoneField';