import { LayoutGrid } from "lucide-react";
import logo from "../../../assets/png/zaira-pay.png";
import { services } from "../../../constants/home";
import { renderServicesIcon } from "../../../helper/jsx-helper";

interface ISideBarProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export const Sidebar: React.FC<ISideBarProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <>
      <div className='w-full py-6'>
        <img src={logo} alt='logo' className='object-contain' />
      </div>
      <div className='flex flex-col space-y-3 overflow-hidden border-b border-b-[lightGrey] pb-2'>
        {/* dashboard */}
        <button
          className={`text-left font-satoshi ${
            selectedItem === "Dashboard" ? "text-white" : "text-[#667185]"
          } text-[14px] flex items-center pl-4 gap-2 py-2 ${
            selectedItem === "Dashboard" ? "bg-orange" : "bg-transparent"
          } mx-1 rounded-md`}
          onClick={() => setSelectedItem("Dashboard")}>
          {
            renderServicesIcon(
              "dashboard",
              `${selectedItem === "Dashboard" ? "white" : "#667185"}`
            )?.icon
          }
          {renderServicesIcon("dashboard", "white")?.title}
        </button>
        {/* services from API */}
        {services &&
          services.slice(0, 5).map((items, index) => (
            <button
              key={index}
              className={`text-left font-satoshi ${
                selectedItem === items ? "text-white" : "text-[#667185]"
              }  text-[14px] flex items-center pl-4 gap-2 py-2 ${
                selectedItem === items ? "bg-orange" : "bg-transparent"
              } mx-1 rounded-md`}
              onClick={() => setSelectedItem(items)}>
              {
                renderServicesIcon(
                  items,
                  `${selectedItem === items ? "white" : "#667185"}`
                )?.icon
              }
              {
                renderServicesIcon(
                  items,
                  `${selectedItem === items ? "white" : "#667185"}`
                )?.title
              }
            </button>
          ))}
        {/* more */}
        <button
          className={`text-left font-satoshi ${
            selectedItem === "More" ? "text-white" : "text-[#667185]"
          } text-[14px] flex items-center pl-4 gap-2 py-2 ${
            selectedItem === "More" ? "bg-orange" : "bg-transparent"
          } mx-1 rounded-md`}
          onClick={() => setSelectedItem("More")}>
          <LayoutGrid
            size={15}
            color={`${selectedItem === "More" ? "white" : "#667185"}`}
          />
          More
        </button>
      </div>
    </>
  );
};
