import React from 'react';

interface MeetingTypeRadioProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const MeetingTypeRadio: React.FC<MeetingTypeRadioProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-l font-semibold text-gray-700">
         نوع الاجتماع  <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-120">
        {/* الخيار الأول: عبر الإنترنت */}
        <label
          className={`flex items-center gap-3 cursor-pointer transition ${
            value === 'ONLINE' ? ' font-medium' : 'text-gray-700 '
          }`}
        >
          <input
            type="radio"
            name="meetingType"
            value="ONLINE"
            checked={value === 'ONLINE'}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 accent-gray-400"
          />
          <div>
            <div className="text-sm font-semibold">عبر الإنترنت (زوم / جوجل ميت)</div>
          </div>
        </label>

        {/* الخيار الثاني: حضوري في مقر الشركة */}
        <label
          className={`flex items-center gap-3 p-3 cursor-pointer transition ${
            value === 'IN_PERSON' ? ' font-medium' : 'text-gray-700 '
          }`}
        >
          <input
            type="radio"
            name="meetingType"
            value="IN_PERSON"
            checked={value === 'IN_PERSON'}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 accent-gray-400"
          />
          <div>
            <div className="text-sm font-semibold">حضوري (في مقر الشركة)</div>
          </div>
        </label>
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};