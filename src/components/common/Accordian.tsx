import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import QuickActionsWrapper from "./QuickActionsWrapper";

export interface AccordianItem {
    id: string;
    title: string;
    subtitle?: string;
    value?: string;
    icon?: React.ReactNode;
    body: React.ReactNode;
}

interface AccordianProps {
    items: AccordianItem[];
    defaultOpenId?: string | null;
}

const Accordian: React.FC<AccordianProps> = ({ items, defaultOpenId = null }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(defaultOpenId);

    const toggle = (id: string) => setOpenItemId((current) => (current === id ? null : id));

    return (
        <div className="space-y-2">
            {items.map((item) => {
                const isOpen = item.id === openItemId;
                return (
                    <QuickActionsWrapper key={item.id} className="">
                        <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="w-full flex items-center justify-between gap-3 text-left"
                        >
                            <div className="flex items-start flex-col gap-2">
                                {isOpen && item.icon && <span className="text-white/80">{item.icon}</span>}
                                <div>
                                    <p className="heading-small-bold text-white">{item.title}</p>
                                    {item.subtitle && <p className="text-small-medium text-white/80">{item.subtitle}</p>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {item.value && <span className="text-regular-bold text-white">{item.value}</span>}
                                {isOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                            </div>
                        </button>

                        {isOpen && <div className=" pt-4">{item.body}</div>}
                    </QuickActionsWrapper>
                );
            })}
        </div>
    );
};

export default Accordian;
