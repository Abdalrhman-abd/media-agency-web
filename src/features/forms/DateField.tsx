import React, { forwardRef } from 'react';

interface DateFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  ({ label, error, required, id, name, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <input
          ref={ref}
          id={inputId}
          name={name}
          type="date"
          className={`w-full px-4 py-3 rounded-xl border outline-none transition duration-200 bg-gray-50 text-gray-800 ${
            error
              ? 'border-red-400 focus:border-red-500 bg-red-50/30'
              : 'border-gray-200 focus:border-blue-500 focus:bg-white'
          }`}
          {...props}
        />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

DateField.displayName = 'DateField';