import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronDown, ChevronLeft } from "lucide-react";
import QuickActionsWrapper from "./QuickActionsWrapper";

export interface AccordianItem {
    id: string;
    title?: React.ReactNode | string;
    subtitle?: React.ReactNode | string;
    date?: string;
    status?: string;
    value?: string;
    icon?: React.ReactNode | string;
    body: React.ReactNode;
}

interface AccordianProps {
    items: AccordianItem[];
    defaultOpenId?: string | null;
    openItemId?: string | null;
    onOpenItemIdChange?: (id: string | null) => void;
}

const Accordian: React.FC<AccordianProps> = ({ items, defaultOpenId = null, openItemId, onOpenItemIdChange }) => {
    const isControlled = openItemId !== undefined;



    return (
        <div className="space-y-2">
            {items.map((item) => (
                <QuickActionsWrapper key={item.id} className="p-0 overflow-hidden">
                    <Accordion
                        className="p-0"
                        itemClasses={{
                            base: "p-0 m-0",
                            content: "p-0 m-0",
                            trigger: "p-0 m-0",
                            heading: "p-0 m-0",
                            // divider: "hidden",
                        }}
                        selectedKeys={
                            isControlled
                                ? openItemId === item.id ? new Set([item.id]) : new Set<string>()
                                : undefined
                        }
                        defaultSelectedKeys={
                            !isControlled && defaultOpenId === item.id
                                ? new Set([item.id])
                                : new Set()
                        }
                        onSelectionChange={(keys) => {
                            if (keys === "all") return;
                            const keyArray = Array.from(keys) as string[];
                            const newId = keyArray[0] ?? null;
                            if (isControlled) {
                                onOpenItemIdChange?.(newId === item.id ? item.id : null);
                            }
                        }}
                        selectionMode="single"
                        showDivider={false}
                    >
                        <AccordionItem
                            key={item.id}
                            textValue={typeof item.title === "string" ? item.title : ""}
                            classNames={{
                                base: "p-0 m-0",
                                content: "p-0 m-0",
                                trigger: "p-0 m-0",
                                heading: "p-0 m-0",
                                // divider: "hidden",
                            }}
                            title={
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="heading-small-bold text-white">{item.title}</p>
                                        {item.subtitle && (
                                            <p className="text-small-medium text-white/80">{item.subtitle}</p>
                                        )}
                                    </div>
                                    {item.value && (
                                        <span className="text-regular-bold text-white">{item.value}</span>
                                    )}

                                </div>
                            }
                            indicator={({ isOpen }) =>
                                isOpen
                                    ? <ChevronLeft className="w-5 h-5 text-white" />
                                    : <ChevronDown className="w-5 h-5 text-white" />
                            }
                        >
                            <div className="pb-4 mt-3">{item.body}</div>
                        </AccordionItem>
                    </Accordion>
                </QuickActionsWrapper>
            ))}
        </div>
    );
};

export default Accordian;