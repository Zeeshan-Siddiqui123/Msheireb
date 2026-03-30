import { Airplay, Lightbulb, Lock, Settings2 } from "lucide-react";
import QuickActions from "../portals/residential/QuickActions";


 const quickActionsData = [
    { icon: <Airplay size={24} strokeWidth={1.5} />, label: "HVAC" },
    { icon: <Lock size={24} strokeWidth={1.5} />, label: "Security" },
    { icon: <Lightbulb size={24} strokeWidth={1.5} />, label: "Lighting" },
    { icon: <Settings2 size={24} strokeWidth={1.5} />, label: "Automation" },
  ];
export const RightSidebarContent = () => (
  <div className="space-y-4">
    <h2 className="heading-medium-bold">Quick Actions</h2>
    <QuickActions actions={quickActionsData} />
  </div>
);