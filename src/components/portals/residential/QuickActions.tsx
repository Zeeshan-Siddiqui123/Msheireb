// import { ReactNode } from "react";
import type { ReactNode } from "react";
import QuickActionsWrapper from "../../common/ui/QuickActionsWrapper";
// import GlassFrame from "../../common/ui/GlassFrame";

interface QuickActionItem {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export interface QuickActionsProps {
  actions: QuickActionItem[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <QuickActionsWrapper className="w-full p-8 ">
      <div className="grid grid-cols-2 gap-y-12 gap-x-12 w-full place-items-center">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex flex-col items-center cursor-pointer justify-center gap-4 text-white hover:text-white group transition-all duration-300"
          >
            <div className="text-white drop-shadow-md">
              {action.icon}
            </div>
            <span className="text-small-regular">{action.label}</span>
          </button>
        ))}
      </div>
    </QuickActionsWrapper>
  );
}
