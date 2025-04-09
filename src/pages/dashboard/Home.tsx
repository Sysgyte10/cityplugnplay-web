import { useState } from "react";
import {
  Airtime,
  CableTV,
  Dashboard,
  Data,
  Education,
  Electricity,
  Settings,
  Sidebar,
} from "../../components/dashboard/Home";
import { CustomTextInput } from "../../components/shared";
import { Bell, ChevronDown, MessageCircleMore } from "lucide-react";

export const Home = () => {
  const [selectedSideBarItem, setSelectedSideBarItem] =
    useState<string>("Dashboard");
  return (
    <div className='flex flex-row'>
      <div className='w-[15%] h-screen left-0 border-r border-r-[lightGrey] bg-white'>
        <Sidebar
          selectedItem={selectedSideBarItem}
          setSelectedItem={(value) => {
            setSelectedSideBarItem(value);
            console.log(value);
          }}
        />
      </div>
      <div className='flex flex-col w-[85%] bg-[#FDFDFD]'>
        {/* input and other items*/}
        <div className='pt-3 flex items-center justify-end gap-4 px-2 border-b border-b-[lightGrey] bg-[white] fixed w-[85%] z-50'>
          <div className='w-[30%]'>
            <CustomTextInput
              placeHolder='search here'
              inputType='text'
              className='h-10'
            />
          </div>
          <div className='flex items-center gap-4 mt-[-12px] ml-5'>
            <button>
              <Bell size={20} color='#667185' />
            </button>
            <button>
              <MessageCircleMore size={20} color='#667185' />
            </button>
          </div>
          {/* user image and dropdown icon */}
          <div className='flex items-center mt-[-12px] gap-4'>
            <div className='w-8 h-8 bg-[#FFE7CC] rounded-full overflow-hidden'>
              <img src='' />
            </div>
            <button>
              <ChevronDown size={20} color='#667185' />
            </button>
          </div>
        </div>
        {/* main dashboard content */}
        <div className='flex flex-col pt-20'>
          {selectedSideBarItem === "Dashboard" && <Dashboard />}
          {selectedSideBarItem === "Airtime" && <Airtime />}
          {selectedSideBarItem === "Data" && <Data />}
          {selectedSideBarItem === "TV" && <CableTV />}
          {selectedSideBarItem === "Electricity" && <Electricity />}
          {selectedSideBarItem === "Education" && <Education />}
          {selectedSideBarItem === "More" && <Settings />}
        </div>
      </div>
    </div>
  );
};
