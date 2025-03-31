import { useRef } from "react";

interface OTPInputProps {
  numInputs?: number;
  value: string;
  onChange: (otp: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  numInputs = 6,
  value,
  onChange,
}) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>(
    Array(numInputs).fill(null)
  );

  // Handle change
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newOtp = value.split("");
    newOtp[index] = e.target.value;
    const otpValue = newOtp.join("").slice(0, numInputs); // Restrict length
    onChange(otpValue);

    // Move to next input if there's a value
    if (e.target.value && index < numInputs - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle key events (backspace)
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className='flex justify-center items-center gap-2 pt-1 pb-1'>
      {Array.from({ length: numInputs }).map((_, index) => (
        <input
          key={index}
          ref={(el: any) => (inputsRef.current[index] = el)}
          type='text'
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className='w-8 h-11 border border-[#d8d3e7] text-[#000000] text-center rounded-md focus:outline-none focus:border-[#F09228] transition-all duration-300'
        />
      ))}
    </div>
  );
};
