import { MoveLeft } from "lucide-react";
import React from "react";

interface IBreadCrumbsProps {
  selectedNetwork: string;
  onPressBack: () => void;
  title: string;
}

export const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({
  selectedNetwork,
  onPressBack,
  title,
}) => {
  return (
    <div className='flex flex-row items-center gap-2 py-3'>
      <button
        className='px-1 py-1 border-[1.5px] border-[#66718538] rounded-sm'
        onClick={() => onPressBack()}>
        <MoveLeft color='black' size={10} />
      </button>
      <p className='font-semibold text-[#667185] text-sm'>Go Back</p>
      <p className='font-medium text-[#66718598] text-sm'>{title} /</p>
      <p className='font-semibold text-black text-sm'>{selectedNetwork}</p>
    </div>
  );
};
