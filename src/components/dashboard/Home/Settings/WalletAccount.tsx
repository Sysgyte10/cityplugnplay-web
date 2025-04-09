import React from "react";
import { FormTitle } from "../../../../common";
import { walletAccts } from "../../../../constants/walletaccounts";

export const WalletAccount: React.FC<{}> = () => {
  return (
    <div className='flex flex-col pb-10'>
      <FormTitle
        title='Virtual Wallet'
        subtitle='Make deposits into any of the virtual accounts'
        card
      />
      <div className='bg-[#FBFBFB] py-5 px-5 rounded-lg my-5 sm:w-[100%] md:w-[100%] lg:w-[40%]'>
        <div className='space-y-5'>
          {walletAccts &&
            walletAccts.map((item, index) => (
              <div className='flex flex-col py-2 space-y-3' key={index}>
                <div className='flex flex-row items-center justify-between'>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    Account Name:
                  </p>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    {item?.acctName}
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    Account Number:
                  </p>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    {item?.acctNumber}
                  </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    Bank Name:
                  </p>
                  <p className='font-semibold text-sm font-satoshi text-black'>
                    {item?.bankName}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
