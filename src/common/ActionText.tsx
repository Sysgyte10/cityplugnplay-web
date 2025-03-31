import React from "react";
import { clsx } from "clsx";

interface IActionTextProps {
  description: string;
  actionTitle: string;
  onClickAction: () => void;
  className?: string;
}

export const ActionText: React.FC<IActionTextProps> = ({
  description,
  actionTitle,
  onClickAction,
  className,
}) => {
  return (
    <p
      className={clsx(
        "font-normal font-satoshi text-deepDarkGrey text-[12px]",
        className
      )}>
      {description}{" "}
      <span
        className='text-orange font-satoshi font-semibold text[16px] hover:cursor-pointer pl-1'
        onClick={onClickAction}>
        {actionTitle}
      </span>
    </p>
  );
};
