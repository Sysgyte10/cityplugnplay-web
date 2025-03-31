import React, { useState } from "react";
import { CustomButton } from "../../shared";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import illustration from "../../../assets/png/Illustration.png";
import { Tab } from "../../../common";
import {
  doMoreImages,
  transactionDuration,
  transactionHistory,
} from "../../../constants/home";
import { formatDate } from "../../../helper/helper";
import { renderServicesIcon } from "../../../helper/jsx-helper";

export const Dashboard: React.FC = () => {
  const [acctVisible, setAcctVisible] = useState<boolean>(false);
  const [selectedTabItem, setSelectedTabItem] = useState<string>(
    transactionDuration[0]
  );

  return (
    <>
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 sm:px-10 py-4 gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-[#000000] font-satoshi font-semibold text-2xl'>
            Hello Bunmi,
          </p>
          <p className='font-normal font-satoshi text-[12px] text-deepDarkGrey'>
            All general information appears in this field.
          </p>
        </div>
        {/* Buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto'>
          <CustomButton
            title='Add money'
            className='w-full sm:w-auto bg-transparent border border-orange px-5 py-3 text-[#f09228]'
            onClick={() => console.log("Add money")}
          />
          <CustomButton
            title='Send money'
            className='w-full sm:w-auto bg-orange px-5 py-3 border border-orange text-white'
            onClick={() => console.log("Send money")}
          />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className='flex flex-col sm:flex-row items-stretch justify-between px-5 sm:px-10 py-5 gap-5'>
        {/* Account Balance Card */}
        <div className='bg-brown w-full sm:w-[48%] py-5 px-5 rounded-md h-full flex flex-col justify-between'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col gap-2'>
              <p className='text-white text-xs'>Available Balance</p>
              <p className='text-white font-satoshi font-semibold text-3xl'>
                {acctVisible ? "$140,000" : "********"}
                {acctVisible && (
                  <span className='text-lg text-lightGrey font-normal'>
                    .00
                  </span>
                )}
              </p>
              <p className='text-white text-xs'>Account Number: 223475859</p>
            </div>
            <button onClick={() => setAcctVisible(!acctVisible)}>
              {acctVisible ? (
                <Eye size={20} color='white' />
              ) : (
                <EyeOff size={20} color='white' />
              )}
            </button>
          </div>
        </div>

        {/* Cashback Promo Card */}
        <div className='bg-orange w-full sm:w-[48%] px-5 rounded-md h-full flex flex-col justify-between'>
          <div className='flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3'>
            <div className='space-y-2 py-5'>
              <p className='text-white font-semibold text-[12px]'>
                Up to 20% cashback on bill payment on
              </p>
              <p className='text-white font-semibold text-[12px]'>
                every transaction
              </p>
              <p className='text-[10px] font-satoshi font-normal text-white'>
                Get more points to promote your products
              </p>
              <CustomButton
                title='Know more'
                className='bg-[#4e1114] text-white px-3 py-1 text-xs'
                onClick={() => {}}
              />
            </div>
            {/* Image - Hidden on Mobile, Visible on Small Screens & Above */}
            <div className='hidden sm:block w-16 h-16 sm:w-20 sm:h-20'>
              <img
                src={illustration}
                alt='illustration'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      {/* graph */}
      <div className='px-10'>
        <div className='bg-white py-5 px-5 rounded-md shadow-xl'>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-[#9291A5] font-satoshi font-semibold text-[14px]'>
              Activity
            </p>
            <div className='w-[25%]'>
              <Tab
                data={transactionDuration}
                selectedItem={selectedTabItem}
                setSelectedItem={(value) => setSelectedTabItem(value)}
                className='bg-[#FEFBF6]'
                buttonClassName='px-5'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 sm:px-10 flex flex-col sm:flex-row items-stretch justify-between py-5 sm:py-10 gap-5 sm:gap-10'>
        {/* Do More with Zaria Pay Section */}
        <div className='flex flex-col w-full'>
          <p className='text-black font-semibold text-[14px] sm:text-[16px]'>
            Do more with Zaria Pay
          </p>
          <div className='flex flex-row items-center gap-3 py-3'>
            {doMoreImages &&
              doMoreImages.map((items, index) => (
                <div
                  className='w-28 h-32 sm:w-36 sm:h-40 flex-shrink-0'
                  key={index}>
                  <img src={items} className='w-full h-full object-fill' />
                </div>
              ))}
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className='flex flex-col w-full'>
          <div className='flex flex-row items-center justify-between pb-3 sm:pb-5'>
            <p className='text-black font-semibold text-[14px] sm:text-[16px]'>
              Recent Transactions
            </p>
            <button className='text-sharpOrange font-semibold text-[12px] sm:text-[14px] flex items-center'>
              View all
              <span>
                <ChevronRight size={20} color='#F09228' strokeWidth={1.5} />
              </span>
            </button>
          </div>

          <div className='flex flex-col bg-white shadow-lg rounded-md py-2 px-3 sm:px-5'>
            {transactionHistory &&
              transactionHistory.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-row items-center justify-between py-2 sm:py-3'>
                  <div className='flex flex-row items-center gap-2'>
                    <span className='bg-brown rounded-full p-1 sm:p-2'>
                      {
                        renderServicesIcon(item?.transactionType, "orange")
                          ?.icon
                      }
                    </span>
                    <p className='text-[10px] sm:text-xs font-semibold text-black'>
                      {item.name}
                    </p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-medium text-[9px] sm:text-[10px] text-sharpOrange'>
                      -N{item?.amount}
                    </p>
                    <p className='text-[8px] sm:text-[9px] text-deepDarkGrey font-normal'>
                      {formatDate(item?.transactionDate)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
