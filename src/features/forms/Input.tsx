import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, id, name, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-l font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          name={name}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition duration-200 text-gray-800 ${
            error
              ? 'border-red-500 focus:border-red-600 bg-red-50/30'
              : 'border-[#5d1b9a] focus:border-blue-500 focus:bg-white'
          }`}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-500 mt-0.5">
            <span aria-hidden="true">⚠️</span>
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';