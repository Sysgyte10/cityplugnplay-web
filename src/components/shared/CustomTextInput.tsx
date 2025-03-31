import React, { useState } from "react";
import clsx from "clsx"; // Import clsx for class management
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

export interface IInputProps {
  textArea?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
  placeHolder: string;
  label?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  className?: string; // Prop for custom styling
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const CustomTextInput: React.FC<IInputProps> = ({
  textArea,
  inputType,
  label,
  placeHolder,
  error,
  disabled,
  min,
  max,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col w-full mb-4'>
      {label && (
        <p className='text-[15px] mb-1 font-medium font-satoshi'>{label}</p>
      )}

      {textArea ? (
        <textarea
          className={clsx(
            "py-3 rounded-lg px-2 placeholder:text-stone-700 placeholder:font-normal border-[1.5px] border-slate-300 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-0 h-32",
            className // Merge custom className
          )}
          placeholder={placeHolder}
          onChange={props.onChange}
          value={props.value}
          disabled={disabled}
        />
      ) : (
        <div className='relative'>
          <input
            type={
              inputType === "password" && !showPassword ? "password" : "text"
            }
            className={clsx(
              "py-3 rounded-lg px-2 h-12 w-full placeholder:text-stone-700 placeholder:font-normal border-[1.5px] border-slate-300 shadow-sm focus:outline-none focus:border-slate-300 focus:ring-0 pr-10",
              className // Merge custom className
            )}
            placeholder={placeHolder}
            disabled={disabled}
            min={
              inputType === "date" || inputType === "datetime-local"
                ? min
                : undefined
            }
            max={
              inputType === "date" || inputType === "datetime-local"
                ? max
                : undefined
            }
            {...props}
          />

          {/* Eye Icon for Password Toggle */}
          {inputType === "password" && (
            <button
              type='button'
              className='absolute inset-y-0 right-3 flex items-center'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <EyeOff className='w-5 h-5 text-stone-700' />
              ) : (
                <Eye className='w-5 h-5 text-stone-700' />
              )}
            </button>
          )}
        </div>
      )}

      {error && (
        <p className='font-medium text-[crimson] text-sm h-5'>{error}</p>
      )}
    </div>
  );
};
