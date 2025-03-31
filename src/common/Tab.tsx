import React from "react";
import clsx from "clsx";

interface ITabProps {
  data: string[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  className?: string; // Custom class for the container
  buttonClassName?: string; // Custom class for button text
}

export const Tab: React.FC<ITabProps> = ({
  data,
  selectedItem,
  setSelectedItem,
  className,
  buttonClassName,
}) => {
  return (
    <div
      className={clsx(
        "bg-[#F092282E] py-[0.5px] w-full flex flex-row items-center justify-between rounded-full",
        className
      )}>
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedItem(item)}
          className={clsx(
            "font-satoshi text-[10px] rounded-full px-2 py-3 transition-all duration-200",
            selectedItem === item
              ? "text-white bg-orange font-medium"
              : "text-black bg-transparent font-semibold",
            buttonClassName
          )}>
          {item}
        </button>
      ))}
    </div>
  );
};
