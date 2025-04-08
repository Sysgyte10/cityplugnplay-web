import React, { useState } from "react";
import { FormTitle } from "../../../../common";
import Switch from "react-switch";

const paymentOptions = [
  "Transaction Pin",
  "Biometrics Payment",
  "Wallet Payment",
];

export const PaymentOption: React.FC<{}> = () => {
  const [checkedIndexes, setCheckedIndexes] = useState<number[] | null>(null);
  return (
    <div className='flex flex-col pb-10'>
      <FormTitle
        title='Payment Options'
        subtitle='Toggle below how you want to execute your transactions'
        card
      />
      <div className='bg-[#FBFBFB] py-5 px-5 rounded-lg my-5 sm:w-[100%] md:w-[100%] lg:w-[40%]'>
        {paymentOptions &&
          paymentOptions.map((item, index) => {
            const checked = checkedIndexes?.includes(index) ?? false;
            return (
              <div
                key={index}
                className='flex flex-row items-center justify-between'>
                <p className='text-black font-medium text-xl py-5'>{item}</p>
                <Switch
                  height={22}
                  width={40}
                  handleDiameter={20}
                  offColor='#d8d3e7'
                  onColor='#F09228'
                  checked={checked}
                  onChange={() =>
                    setCheckedIndexes((prev) => {
                      // If prev is null (no items checked yet), we start with an empty array
                      const currentChecked = prev ?? [];
                      // Check if this index is already in the list
                      const isAlreadyChecked = currentChecked.includes(index);
                      if (isAlreadyChecked) {
                        // If it's already checked, remove it from the array
                        const updated = currentChecked.filter(
                          (i) => i !== index
                        );
                        return updated;
                      } else {
                        // If it's not checked, add it to the array
                        const updated = [...currentChecked, index];
                        return updated;
                      }
                    })
                  }
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
