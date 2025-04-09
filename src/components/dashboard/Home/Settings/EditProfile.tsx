import React from "react";
import { FormTitle } from "../../../../common";
import { Check, ImagePlus } from "lucide-react";
import { CustomTextInput } from "../../../shared";

export const EditProfile: React.FC<{}> = () => {
  return (
    <div className='flex flex-col pb-10'>
      <FormTitle
        title='Account Settings'
        subtitle='Note that you can only edit this place once in 3 months'
        card
      />
      <div className='sm:w-[100%] md:w-[100%] lg:w-[55%] px-5 lg:flex sm:flex-col md:flex-col lg:flex-row lg:items-stretch lg:justify-between pt-10'>
        <div className='flex flex-col'>
          <p className='font-semibold text-base font-satoshi'>Profile Photo</p>
          <p className='text-semibold text-sm font-satoshi text-deepDarkGrey max-w-[70%]'>
            This image will be displayed on your profile
          </p>
          <button className='bg-white border-[2px] border-sharpOrange rounded-xl px-2 py-2 font-semibold text-sharpOrange sm:max-w-[80%] md:max-w-[80%] lg:max-w-[55%] text-sm my-5 flex flex-row items-center justify-center gap-2'>
            <ImagePlus color='#ff5722' size={20} />
            Change Photo
          </button>
        </div>
        <div className='relative w-32 h-32'>
          <div className='w-full h-full rounded-full bg-orange overflow-hidden flex items-center justify-center'>
            <p className='text-white'>Pics</p>
          </div>

          <div className='absolute bottom-[-5px] right-2 w-10 h-10 rounded-full bg-[#1671D9] flex items-center justify-center'>
            <Check color='white' size={25} />
          </div>
        </div>
      </div>
      <div className='lg:flex md:flex-col sm:flex-col lg:flex-row lg:items-start lg:justify-between px-5 sm:w-[100%] md:w-[100%] lg:w-[90%] pt-5 border-t-2 border-t-[#D0D5DD]'>
        <div className='flex flex-col'>
          <p className='font-semibold text-base font-satoshi'>
            Personal Information
          </p>
          <p className='text-semibold text-sm font-satoshi text-deepDarkGrey'>
            Update your personal details here
          </p>
          <button className='bg-[#D0D5DD] rounded-xl px-2 py-2 font-semibold text-white sm:max-w-[80%] md:max-w-[80%] lg:max-w-[70%] text-sm my-5 flex flex-row items-center justify-center gap-2'>
            Save Changes
          </button>
        </div>
        <div>
          <div className='flex flex-row items-stretch justify-between gap-7'>
            <CustomTextInput
              placeHolder='First name'
              label='First name'
              value=''
              onChange={() => {}}
              className='w-full'
            />
            <CustomTextInput
              placeHolder='last name'
              label='First name'
              value=''
              onChange={() => {}}
              className='w-full'
            />
          </div>
          <CustomTextInput
            placeHolder='adebunmy@gmail.com'
            label='Email Address'
            value=''
            onChange={() => {}}
            className='w-full bg-[#98a2b394]'
          />
          <CustomTextInput
            placeHolder='Male'
            label='Gender'
            value=''
            onChange={() => {}}
            className='w-full'
          />
          <CustomTextInput
            placeHolder='Lagos'
            label='City'
            value=''
            onChange={() => {}}
            className='w-full'
          />
          <CustomTextInput
            placeHolder='Ikeja L.G.A'
            label='Local Government'
            value=''
            onChange={() => {}}
            className='w-full'
          />
          <div className='flex justify-end'>
            <button className='bg-orange rounded-md px-3 py-3 font-medium text-white text-sm my-2 gap-2'>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
