import React from 'react';
import { Select, type SelectProps } from "@heroui/react";
import QuickActionsWrapper from './QuickActionsWrapper';

interface BaseSelectProps extends Omit<SelectProps, "label" | "children"> {
  label: string;
  children: React.ReactNode;
  error?: string;      // Added error prop
  isShaking?: boolean; // Added shaking prop
}

const BaseSelect: React.FC<BaseSelectProps> = ({ label, children, className, error, isShaking, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-white text-small-medium ml-1">
        {label}
      </label>
      <div
        key={isShaking ? 'shaking' : 'static'}
        className={`w-full ${isShaking ? 'animate-shake' : ''}`}
      >

        <QuickActionsWrapper className='shadow-figma-drop !p-0'>
          <Select
            label=""
            aria-label={label}
            variant="bordered"
            classNames={{
  base: "w-full",
  trigger: [
    "h-[48px]",
    "bg-transparent",
    "backdrop-blur-lg",
    "border-none",
    "shadow-none",
    "hover:!bg-transparent",
    "data-[hover=true]:border-white/40",
    "data-[focus=true]:border-white/40",
    "transition-all",
    "group",
    className
  ].join(" "),

  value: "text-white !text-white font-sf-pro font-medium text-[12px] leading-[16px] tracking-[1px]",
  innerWrapper: "text-white text-[12px]",

  // ✅ Transparent dropdown
  popoverContent: "bg-transparent text-white rounded-xl backdrop-blur-xl border border-white/20 shadow-none",

  // ✅ Optional: list items spacing
  listbox: "text-white font-sf-pro font-medium text-12 leading-16 tracking-tightest bg-transparent",

  // ✅ EXTRA (important for some cases)
  listboxWrapper: "bg-transparent",
}}
            // Ensures the text remains white when an item is selected
            renderValue={(items) => {
              return items.map((item) => (
                <span key={item.key} className="text-white !text-white text-small-regular">
                  {item.textValue}
                </span>
              ));
            }}
            selectorIcon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-100 group-data-[hover=true]:opacity-100"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            {...props}
          >
            {children as any}
          </Select>
        </QuickActionsWrapper>
      </div>

      {error && (
        <div className="mt-[-6px] animate-fade-in">
          <span className="text-red-700 text-small-regular  slide-in-from-top-1">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default BaseSelect;
