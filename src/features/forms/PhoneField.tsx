import React from 'react';
import { forwardRef } from 'react';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PhoneFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  ({ label, error, required, id, name, ...props }, ref) => {
    const inputId = id || name;
    const [selectedCountry, setSelectedCountry] = useState("+963");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-l font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <div className="flex items-center justify-start rounded-xl border border-[#5d1b9a] focus-within:border-blue-500 focus-within:bg-white transition duration-200 overflow-hidden">
          <div className="relative flex items-center justify-between px-3 py-3 border-e border-[#5d1b9a] text-gray-700 font-medium text-sm select-none bg-transparent">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-transparent outline-none border-none cursor-pointer text-gray-700 font-medium text-sm appearance-none pr-5 z-10"
            >
              <option value="+963">+963</option>
              <option value="+966">+966</option>
              <option value="+971">+971</option>
              <option value="+962">+962</option>
              <option value="+961">+961</option>
            </select>
            {/* هي ايقونة السهم */}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="absolute right-2 text-xs text-gray-500 pointer-events-none"
            />
          </div>

          <input
            ref={ref}
            id={inputId}
            name={name}
            type="tel"
            className="w-full px-4 py-3 bg-transparent outline-none text-gray-800 text-right"
            {...props}
          />
        </div>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

PhoneField.displayName = 'PhoneField';