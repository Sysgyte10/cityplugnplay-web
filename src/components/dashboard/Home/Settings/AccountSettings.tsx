import React from "react";
import { FormTitle } from "../../../../common";
import { CustomTextInput } from "../../../shared";

export const AccountSettings: React.FC<{}> = () => {
  return (
    <div className='flex flex-col pb-10'>
      <FormTitle
        title='Account Settings'
        subtitle='TNote that you can only edit this place once in 3 months'
        card
      />
      <div className='bg-[#FBFBFB] py-5 px-5 rounded-lg my-5 sm:w-[100%] md:w-[100%] lg:w-[40%]'>
        <CustomTextInput
          placeHolder='First name'
          label='First name'
          value=''
          onChange={() => {}}
          className='w-full'
        />

        <CustomTextInput
          placeHolder='Last name'
          label='Last name'
          value=''
          onChange={() => {}}
          className='w-full'
        />

        <CustomTextInput
          placeHolder='Last name'
          label='Email address'
          value=''
          onChange={() => {}}
          className='w-full'
        />

        <CustomTextInput
          placeHolder='*****'
          label='Password'
          inputType='password'
          value=''
          onChange={() => {}}
          className='w-full'
        />
      </div>
    </div>
  );
};
