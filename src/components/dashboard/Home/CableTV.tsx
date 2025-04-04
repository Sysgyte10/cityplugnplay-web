import React, { useState } from "react";
import {
  airtimeServices,
  dataBundleServices,
} from "../../../constants/services";
import { ChevronRight } from "lucide-react";
import { CustomButton, CustomSelectInput, CustomTextInput } from "../../shared";
import { BreadCrumbs, FormTitle, SelectionModal } from "../../../common";
import { useSelectedNetwork } from "../../../hooks/state";

export const CableTV: React.FC<{}> = () => {
  const [selectedData, setSelectedData] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    setSelectedNetworkIndex,
    selectedNetwork,
    setSelectedNetwork,
    selectedNetworkIndex,
  } = useSelectedNetwork();
  return (
    <>
      <div className='px-5 py-5'>
        <FormTitle
          title='Cable & Tv Subscription'
          subtitle='You can get your cable and tv subscription'
        />
        {selectedNetwork && (
          <BreadCrumbs
            selectedNetwork={selectedNetwork}
            onPressBack={() => setSelectedNetwork("")}
            title='Cable & Subscription'
          />
        )}
        {selectedNetwork ? (
          <div className='bg-white shadow-xl rounded-md py-5 px-5 flex flex-col sm:flex-row items-start justify-between w-full sm:w-[90%] md:w-[80%]'>
            {/* Left Section - Image & Network Info */}
            <div className='flex flex-row items-center space-x-2 w-full sm:w-[40%]'>
              <div className='w-10 h-10 rounded-full border-orange border'>
                <img
                  src={airtimeServices[selectedNetworkIndex].icon}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col'>
                <p className='text-[#667185] font-normal font-satoshi text-xs'>
                  Network
                </p>
                <p className='text-black font-medium font-satoshi text-sm'>
                  {airtimeServices[selectedNetworkIndex].name}
                </p>
              </div>
            </div>

            {/* Right Section - Inputs & Button */}
            <div className='w-full sm:w-[55%] mt-4 sm:mt-0'>
              <CustomSelectInput
                label='Select Data Bundle'
                useModal
                value={selectedData}
                onClick={() => setModalVisible(true)}
              />
              <CustomTextInput
                placeHolder='Enter phone number'
                label='Phone Number'
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
          <div className='bg-white shadow-xl rounded-md py-5 px-5 sm:w-[100%] md:w-[80%] lg:w-[60%] flex-col space-y-5 mt-5'>
            {airtimeServices &&
              airtimeServices.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center space-x-2'>
                    <div className='w-10 h-10 rounded-full border-orange border'>
                      <img
                        src={item?.icon}
                        className='w-[100%] h-[100%] object-cover'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[#667185] font-normal font-satoshi text-xs'>
                        Network
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
      <SelectionModal
        visible={modalVisible}
        data={dataBundleServices}
        onSelect={(item) => {
          setSelectedData(item);
          setModalVisible(false);
        }}
        onCloseModal={() => setModalVisible(!modalVisible)}
      />
    </>
  );
};
