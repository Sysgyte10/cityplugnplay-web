import React from "react";

interface IFormTitleProps {
  title: string;
  subtitle: string;
}

export const FormTitle: React.FC<IFormTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <p className='font-satoshi font-semibold text-2xl text-black'>{title}</p>
      <p className='text-[#667185] font-normal font-satoshi text-sm'>
        {subtitle}
      </p>
    </>
  );
};
