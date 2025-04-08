import React from "react";
import { FormTitle } from "../../../../common";
import { Check, ImagePlus } from "lucide-react";

export const EditProfile: React.FC<{}> = () => {
  return (
    <div className='flex flex-col pb-10'>
      <FormTitle
        title='Account Settings'
        subtitle='Note that you can only edit this place once in 3 months'
        card
      />
      <div className='w-[55%] px-5 flex flex-row items-stretch justify-between pt-10'>
        <div className='flex flex-col'>
          <p className='font-semibold text-base font-satoshi'>Profile Photo</p>
          <p className='text-semibold text-sm font-satoshi text-deepDarkGrey max-w-[70%]'>
            This image will be displayed on your profile
          </p>
          <button className='bg-white border-[2px] border-sharpOrange rounded-xl px-2 py-2 font-semibold text-sharpOrange max-w-[55%] text-sm my-5 flex flex-row items-center justify-center gap-2'>
            <ImagePlus color='#ff5722' size={20} />
            Change Photo
          </button>
        </div>
        <div className='flex flex-col'>
          <div className='w-32 h-32 rounded-full bg-orange overflow-hidden'>
            <p>Pics</p>
          </div>
          <span className='w-10 h-10 rounded-full bg-[#1671D9] justify-center items-center flex mt-[-40px] self-end'>
            <Check color='white' size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};
