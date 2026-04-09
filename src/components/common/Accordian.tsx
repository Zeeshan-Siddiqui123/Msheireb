import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import QuickActionsWrapper from "./ui/QuickActionsWrapper";
import Receipt from "/src/assets/svg/reciept.svg";


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
                                base: "p-0 m-0 group",
                                content: "p-0 m-0",
                                trigger: "p-0 m-0",
                                heading: "p-0 m-0",
                            }}
                            title={
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-start flex-col gap-3">
                                         <img
                                        src={Receipt}
                                        alt="Receipt"
                                        className="hidden group-data-[open=true]:block"
                                    />
                                        <div className="flex flex-col">
                                            <p className="heading-small-bold text-white">{item.title}</p>
                                            {item.subtitle && (
                                                <p className="text-small-medium text-white/80">{item.subtitle}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                            indicator={({ isOpen }) =>
                                isOpen
                                    ? <ChevronRight className="w-5 h-5 text-white ml-25 mt-25" />
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