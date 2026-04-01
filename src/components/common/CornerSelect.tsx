import React from 'react';
import { Select, type SelectProps } from "@heroui/react";
import QuickActionsWrapper from './QuickActionsWrapper';

interface CornerSelectProps extends Omit<SelectProps, "label" | "children"> {
  label: string;
  children: React.ReactNode;
}

const CornerSelect: React.FC<CornerSelectProps> = ({ label, children, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-white text-small-medium ml-1">
        {label}
      </label>

      <QuickActionsWrapper className='shadow-figma-drop'>
        <Select
          label=""
          aria-label={label}
          variant="bordered"
          classNames={{
            base: "w-full",
            trigger: [
              "h-[48px]",
              "bg-transparent",
              "backdrop-blur-md",
              "border-none",
              "shadow-none",
              "hover:!bg-transparent",
              "data-[hover=true]:border-white/40",
              "data-[focus=true]:border-white/40",
              "transition-all",
              "group",
              className
            ].join(" "),
            // Forces the selected text AND placeholder to be white
            value: "text-white !text-white text-small-regular",
            // This targets the placeholder specifically
            innerWrapper: "text-white",
            // This targets the dropdown list container
            popoverContent: "bg-[#1a1a1a] border border-white/10 text-white",
            // This targets the list items globally
            listbox: "text-white",
          }}
          // Ensures the text remains white when an item is selected
          renderValue={(items) => {
            return items.map((item) => (
              <span key={item.key} className="text-white !text-white">
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
  );
};

export default CornerSelect;