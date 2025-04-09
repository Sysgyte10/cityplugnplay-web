import React, { useEffect, useState } from "react";
import { FormTitle } from "../../../common";
import { moreSettingsItems } from "../../../constants/services";
import { PaymentOption } from "./Settings/PaymentOptions";
import { AccountSettings } from "./Settings/AccountSettings";
import { EditProfile } from "./Settings/EditProfile";
import { WalletAccount } from "./Settings/WalletAccount";

export const Settings: React.FC<{}> = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>("Account");
  const [selectedItemSubtitleArr, setSelectedItemSubtitleArr] = useState<
    string[]
  >(moreSettingsItems[0].subTitle);
  const [selectedSubtitleItem, setSelectedSubtitleItem] = useState<string>(
    moreSettingsItems[0].subTitle[0]
  );

  useEffect(() => {
    const getSelectedItemSubTitle = () => {
      const data =
        moreSettingsItems &&
        moreSettingsItems.filter(
          (item) => item.title.toLowerCase() === selectedItem.toLowerCase()
        );
      if (data) {
        setSelectedItemSubtitleArr(data[0].subTitle);
        setSelectedSubtitleItem(data[0].subTitle[0]);
      }
    };
    getSelectedItemSubTitle();
  }, [selectedItem]);

  return (
    <div className='px-5 py-5'>
      <FormTitle
        title='Settings'
        subtitle='You can make changes to your profile here'
      />
      <div className='flex flex-row items-center border-[1.5px] border-[lightGrey] rounded-xl w-[25%] justify-between overflow-x-hidden my-5'>
        {moreSettingsItems &&
          moreSettingsItems.map((item, index) => (
            <button
              key={index}
              className={`${
                selectedItem === item?.title
                  ? "bg-orange text-white"
                  : "bg-transparent text-darkGrey"
              } px-[13px] py-[10px] w-full sm:text-xs md:text-xs lg:text-sm font-medium ${
                index === 1
                  ? "border-r-[1.5px] border-r-[lightGrey] border-l-[1.5px] border-l-[lightGrey]"
                  : ""
              }`}
              onClick={() => setSelectedItem(item.title)}>
              {item.title}
            </button>
          ))}
      </div>
      {/* form container */}
      <div className='bg-white shadow-xl rounded-md py-5 px-5 lg:w-[100%] flex-col space-y-5 mt-5 overflow-y-scroll scrollbar-hide'>
        <div className='flex flex-row items-stretch justify-start gap-2 border-b-[1.5px] border-b-lightGrey overflow-x-scroll scrollbar-hide'>
          {selectedItemSubtitleArr &&
            selectedItemSubtitleArr.map((item, index) => (
              <div
                onClick={() => setSelectedSubtitleItem(item)}
                className={`pb-3 px-2 font-medium hover:cursor-pointer ${
                  selectedSubtitleItem === item
                    ? "border-b-orange border-b-[2px]"
                    : ""
                }`}
                key={index}>
                <p
                  className={`${
                    selectedSubtitleItem === item
                      ? "text-black"
                      : "text-deepDarkGrey"
                  } text-sm`}>
                  {item}
                </p>
              </div>
            ))}
        </div>
        {selectedSubtitleItem === "Payment Options" && <PaymentOption />}
        {selectedSubtitleItem === "Account Settings" && <AccountSettings />}
        {selectedSubtitleItem === "Edit Profile" && <EditProfile />}
        {selectedSubtitleItem === "Wallet Account" && <WalletAccount />}
      </div>
    </div>
  );
};
