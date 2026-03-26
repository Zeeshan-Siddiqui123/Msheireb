import type { ReactNode } from "react";
import GlassCard from "../../common/GlassCard";

export interface QuickActionItem {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export interface QuickActionsProps {
  actions: QuickActionItem[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <GlassCard className="p-6 h-fit">
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex flex-col items-center justify-center gap-3 text-white/90 hover:text-white group transition"
          >
            <div className="p-3 rounded-full bg-white/5  group-hover:bg-white/20 transition shadow-inner">
              {action.icon}
            </div>
            <span className="text-small-regular">{action.label}</span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
}
