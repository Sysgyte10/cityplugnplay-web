import React from "react";
import { electricityServices } from "../../../constants/services";
import { ChevronRight } from "lucide-react";
import { CustomButton, CustomTextInput } from "../../shared";
import { BreadCrumbs, FormTitle, Tab } from "../../../common";
import { useSelectedNetwork, useTab } from "../../../hooks/state";

export const Electricity: React.FC<{}> = () => {
  const { selectedTabItem, setSelectedTabItem } = useTab([
    "Postpaid",
    "Prepaid",
  ]);
  const {
    setSelectedNetworkIndex,
    selectedNetwork,
    setSelectedNetwork,
    selectedNetworkIndex,
  } = useSelectedNetwork();
  return (
    <div className='px-5 py-5'>
      <FormTitle
        title='Electricity Bill'
        subtitle='You can pay for your electricity bill today'
      />
      {selectedNetwork && (
        <BreadCrumbs
          selectedNetwork={selectedNetwork}
          onPressBack={() => setSelectedNetwork("")}
          title='Electricity'
        />
      )}
      {selectedNetwork ? (
        <div className='bg-white shadow-xl rounded-md py-5 px-5 flex flex-col sm:flex-row items-start justify-between w-full sm:w-[90%] md:w-[80%]'>
          {/* Left Section - Image & Network Info */}
          <div className='flex flex-row items-center space-x-2 w-full sm:w-[40%]'>
            <div className='w-10 h-10 rounded-full border-orange border overflow-hidden'>
              <img
                src={electricityServices[selectedNetworkIndex].icon}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-[#667185] font-normal font-satoshi text-xs'>
                Electricity
              </p>
              <p className='text-black font-medium font-satoshi text-sm'>
                {electricityServices[selectedNetworkIndex].name}
              </p>
            </div>
          </div>

          {/* Right Section - Inputs & Button */}
          <div className='w-full sm:w-[55%] mt-4 sm:mt-0'>
            <div className='sm:w-[60%] md:w-[35%] lg:w-[35%] pb-2'>
              <Tab
                data={["Postpaid", "Prepaid"]}
                setSelectedItem={(value) => setSelectedTabItem(value)}
                selectedItem={selectedTabItem}
                buttonClassName='px-5'
              />
            </div>
            <CustomTextInput
              placeHolder='Enter metre number'
              label='Metre Number'
              value=''
              onChange={() => {}}
              className='w-full'
            />
            <CustomTextInput
              placeHolder='Enter amount'
              label='Amount'
              value=''
              onChange={() => {}}
              className='w-full'
            />
            <div className='flex justify-end mt-2'>
              <CustomButton
                title='Buy'
                onClick={() => {}}
                className='text-white w-full sm:w-[30%]'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-white shadow-xl rounded-md py-5 px-5 sm:w-[100%] md:w-[80%] lg:w-[60%] flex-col space-y-5 mt-5 h-[40%] overflow-y-scroll scrollbar-hide'>
          {electricityServices &&
            electricityServices.map((item, index) => (
              <div
                key={index}
                className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center space-x-2'>
                  <div className='w-10 h-10 rounded-full border-orange border overflow-hidden'>
                    <img
                      src={item?.icon}
                      className='w-[100%] h-[100%] object-cover'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[#667185] font-normal font-satoshi text-xs'>
                      Electricity
                    </p>
                    <p className='text-black font-medium font-satoshi text-sm'>
                      {item?.name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedNetwork(item?.name);
                    setSelectedNetworkIndex(index);
                  }}>
                  <ChevronRight color='black' size={20} />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
