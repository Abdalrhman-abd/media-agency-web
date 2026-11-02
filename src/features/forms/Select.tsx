import React, { forwardRef } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, required, id, name, placeholder = 'اختر من القائمة', ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <select
          ref={ref}
          id={inputId}
          name={name}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition duration-200 bg-gray-50 text-gray-800 cursor-pointer ${
            error
              ? 'border-red-400 focus:border-red-500 bg-red-50/30'
              : 'border-gray-200 focus:border-blue-500 focus:bg-white'
          }`}
          {...props}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';