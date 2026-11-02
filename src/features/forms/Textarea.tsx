import React, { forwardRef, useState } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, required, id, name, maxLength = 100, value, defaultValue, onChange, ...props }, ref) => {
    const inputId = id || name;
    
    // حالة لتتبع طول النص للعداد (تتعامل مع القيمة الحالية سواء كانت تحكمية أو غير تحكمية)
    const [charCount, setCharCount] = useState<number>(
      typeof value === 'string' ? value.length : typeof defaultValue === 'string' ? defaultValue.length : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex justify-between items-center">
          <label htmlFor={inputId} className="text-sm font-semibold text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {maxLength && (
            <span className="text-xs text-gray-400">
              {charCount}/{maxLength}
            </span>
          )}
        </div>

        <textarea
          ref={ref}
          id={inputId}
          name={name}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition duration-200 bg-gray-50 text-gray-800 resize-none h-32 ${
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

Textarea.displayName = 'Textarea';