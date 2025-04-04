import React from "react";
import { ChevronDown } from "lucide-react";

export interface ISelectProps {
  label?: string;
  options?: string[]; // Keep this optional if using modal
  value?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick: () => void;
  useModal?: boolean; // 🔥 new prop to decide if modal should be used
}

export const CustomSelectInput: React.FC<ISelectProps> = ({
  label,
  options = [],
  value,
  disabled,
  error,
  onChange,
  onClick,
  useModal = false,
}) => {
  return (
    <div className='flex flex-col w-full mb-4'>
      {label && (
        <p className='text-[15px] mb-1 font-medium font-satoshi'>{label}</p>
      )}

      {/* 🔥 Switch behavior based on `useModal` */}
      {useModal ? (
        <div
          className={`w-full py-3 px-3 rounded-lg border-[1.5px] border-slate-300 shadow-sm bg-white appearance-none
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer"}`}
          onClick={!disabled ? onClick : undefined}>
          <div className='flex justify-between items-center'>
            <span className={`${value ? "text-black" : "text-gray-400"}`}>
              {value || "Select an option"}
            </span>
            <ChevronDown className='w-5 h-5 text-gray-500' />
          </div>
        </div>
      ) : (
        <div className='relative'>
          <select
            value={value}
            disabled={disabled}
            onChange={onChange}
            className={`w-full py-3 px-3 pr-10 rounded-lg border-[1.5px] border-slate-300 shadow-sm bg-white appearance-none
            focus:outline-none focus:border-slate-300 focus:ring-0 ${
              disabled ? "bg-gray-100 cursor-not-allowed" : ""
            }`}>
            <option value='' disabled>
              Select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className='absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none' />
        </div>
      )}

      {error && (
        <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
      )}
    </div>
  );
};
