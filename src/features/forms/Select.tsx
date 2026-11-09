import React, { forwardRef } from 'react';
import arrow from "./../../assets/images/arow.png"
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
  ({ label, options, error, required, id, name, placeholder = ' نوع الخدمة', ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-l font-semibold text-gray-700 pl-[-50px]">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <select
          ref={ref}
          id={inputId}
          name={name}
          className={`w-full  appearance-none px-5 py-3 pl-4 rounded-xl border outline-none transition duration-200 text-gray-400 cursor-pointer ${error
              ? 'border-red-400 focus:border-red-500 bg-red-50/30'
              : 'border-[#5d1b9a] focus:border-blue-500 focus:bg-white'
            }`}
          style={{
            backgroundImage: `url(${arrow})` ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 20px center',
            backgroundSize: '12px'
          }}
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