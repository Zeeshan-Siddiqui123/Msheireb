import React from "react";
import { Chip } from "@heroui/react";

// Use your tailwind config keys
export type StatusType = "active" | "pending" | "expired" | "occupied" | "exit" | "entry";

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
        exit: "text-red-600 bg-red-100 border border-red-100",
        entry: "text-green-600 bg-green-100 border border-green-100",

        // Occupied: Using your pill-main (Green)
        occupied: "bg-pill-main/10 text-pill-main border-pill-main/30",
        parked: "bg-pill-main/10 text-pill-main border-pill-main/30 bg-white",
        confirmed: "bg-pill-main/10 text-pill-main border-pill-main/30 bg-white",
    };

    const colorStyle = statusMap[s] || statusMap.active;
    console.log("STATUS:", status, "LOWER:", s);
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