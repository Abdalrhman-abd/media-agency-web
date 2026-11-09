import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
  ({ label, options, error, required, id, name, placeholder = 'نوع الخدمة', ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-l font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <div className="relative flex items-center w-full">
          <select
            ref={ref}
            id={inputId}
            name={name}
            defaultValue=""
            className={`w-full px-4 py-3 pr-10 rounded-xl border outline-none transition duration-200 text-gray-800 cursor-pointer appearance-none bg-transparent ${
              error
                ? 'border-red-400 focus:border-red-500 bg-red-50/30'
                : 'border-[#5d1b9a] focus:border-blue-500 focus:bg-white'
            }`}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <FontAwesomeIcon 
            icon={faChevronDown} 
            className="absolute right-4 text-xs text-gray-500 pointer-events-none" 
          />
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';