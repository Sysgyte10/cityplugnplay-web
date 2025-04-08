import React from "react";

interface IFormTitleProps {
  title: string;
  subtitle: string;
  card?: boolean;
}

export const FormTitle: React.FC<IFormTitleProps> = ({
  title,
  subtitle,
  card,
}) => {
  return (
    <>
      {card ? (
        <div className='px-5 py-5 bg-[#FBFBFB] rounded-lg sm:w-[100%] md:w-[60%] lg:w-[40%]'>
          <p className='font-satoshi font-semibold text-2xl text-black'>
            {title}
          </p>
          <p className='text-[#667185] font-normal font-satoshi text-sm'>
            {subtitle}
          </p>
        </div>
      ) : (
        <>
          <p className='font-satoshi font-semibold text-2xl text-black'>
            {title}
          </p>
          <p className='text-[#667185] font-normal font-satoshi text-sm'>
            {subtitle}
          </p>
        </>
      )}
    </>
  );
};
