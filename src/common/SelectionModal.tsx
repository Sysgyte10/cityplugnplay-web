import { Check } from "lucide-react";
import React, { useState } from "react";

interface ISelectionModalProps {
  data: string[];
  onSelect: (item: any) => void;
  onCloseModal: () => void;
  visible: boolean;
}

export const SelectionModal: React.FC<ISelectionModalProps> = ({
  data,
  onSelect,
  onCloseModal,
  visible,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  return (
    <>
      {visible && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50'
          onClick={() => onCloseModal()}>
          <div
            className='bg-white rounded-lg shadow-lg sm:w-[80%] md:w-[50%] lg:w-[25%] h-[50%] py-3 overflow-y-scroll'
            onClick={(e) => e.stopPropagation()}>
            {data &&
              data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelect(item);
                    setSelectedItem(item);
                  }}
                  className={`w-full py-2 font-satoshi ${
                    selectedItem === item
                      ? "font-semibold bg-[#d8d3e7]"
                      : "font-medium"
                  } text-xs text-start items-center flex flex-row justify-between hover:bg-[#d8d3e7] px-3`}>
                  <p>{item}</p>
                  {selectedItem === item && (
                    <p>
                      <Check size={20} color='#146DF5' />
                    </p>
                  )}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
