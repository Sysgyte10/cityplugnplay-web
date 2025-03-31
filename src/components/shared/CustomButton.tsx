import React from "react";
import { clsx } from "clsx";
import { Loader } from "../../common";

interface ICustomButtonProps {
  title: string;
  loading?: boolean;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  loaderColor?: string;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  title,
  loading,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        "bg-orange py-3 px-5 font-medium text-[14px] rounded-md flex items-center justify-center",
        className
      )}>
      {loading ? <Loader /> : title || "No Title"}
    </button>
  );
};
