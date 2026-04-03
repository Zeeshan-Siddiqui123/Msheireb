import React from "react";
import { Chip } from "@heroui/react";

// Use your tailwind config keys
export type StatusType = "active" | "pending" | "expired" | "occupied";

interface StatusChipProps {
    status: StatusType | string;
    className?: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status, className }) => {
    const s = status.toLowerCase();

    // Mapping using your tailwind config tokens
    const statusMap: Record<string, string> = {
        // Active: White bg, black text (as requested)
        active: "bg-white text-black border-white",

        // Pending: Using your brand-blue/grey mix or custom pill
        pending: "bg-brand-blue-bg text-brand-blue border-brand-blue-100",

        // Expired: Using your pill-200 (Red)
        expired: "bg-pill-200/10 text-pill-200 border-pill-200/30",

        // Occupied: Using your pill-main (Green)
        occupied: "bg-pill-main/10 text-pill-main border-pill-main/30",
        parked: "bg-pill-main/10 text-pill-main border-pill-main/30 bg-white",
        confirmed: "bg-pill-main/10 text-pill-main border-pill-main/30 bg-white",
    };

    const colorStyle = statusMap[s] || statusMap.active;

    return (
        <Chip
            variant="bordered"
            radius="full"
            classNames={{
                // Using your '10' font size and 'inter' font from config
                base: `h-6 px-2 border-[1.5px] ${colorStyle} ${className}`,
                content: `font-inter font-bold text-10 uppercase tracking-wider`,
            }}
        >
            {status}
        </Chip>
    );
};

export default StatusChip;