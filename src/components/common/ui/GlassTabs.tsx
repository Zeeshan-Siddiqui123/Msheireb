import { Tab, Tabs } from "@heroui/react";
import React,{ type Key, type ReactNode }  from "react";

interface TabItem {
  key: string;
  title: string;
  content: ReactNode;
}

interface GlassTabsProps {
  items: TabItem[];
  ariaLabel?: string;
  // If you can't find the @react-types/shared import, 
  // you can also just use: selectedKey?: string | number;
  selectedKey?: | number | string;
  onSelectionChange?: (key: Key) => void;
  className?: string;
}

export const GlassTabs: React.FC<GlassTabsProps> = ({ 
  items, 
  ariaLabel = "Options", 
  selectedKey,
  onSelectionChange,
  className = ""
}) => {
  return (
    <div className={`w-full flex-grow flex flex-col ${className}`}>
      <Tabs
      items={items}
        aria-label={ariaLabel}
        fullWidth
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        classNames={{
          tabList: "bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2 gap-2 p-1 overflow-x-hidden",
          cursor: "bg-white rounded-full shadow-md",
          tab: "h-9",
          tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:font-bold text-white/90 tabs-heading-semi transition-all"
        }}
      >
        {(item: TabItem) => (
          <Tab key={item.key} title={item.title}>
            <div className="mt-2">
              {item.content}
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};