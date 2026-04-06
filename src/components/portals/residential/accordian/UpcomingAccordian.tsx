import { Download } from "lucide-react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";
import GlassButton from "../../../common/GlassButton";
import Upcoming from "/src/assets/reciept.png";

export interface UpcomingItem {
    id: string;
    title: string;
    upcomingCode: string;
    amount: string;
    dueDate: string;
    paidDate: string;
    type: string;
}

interface UpcomingAccordianProps {
    upcomings: UpcomingItem[];
    defaultOpenId?: string | null;
    openItemId?: string | null;
    onOpenItemIdChange?: (id: string | null) => void;
}

const UpcomingAccordian = ({ upcomings, defaultOpenId = null, openItemId, onOpenItemIdChange }: UpcomingAccordianProps) => {
    const accordianItems: AccordianItem[] = upcomings.map((upcoming) => ({
        id: upcoming.id,
        title: (
            <span className="body-regular font-bold text-white">
                {upcoming.title}
            </span>
        ),

        subtitle: (
            <span className="text-small-regular font-semibold text-white">
                Receipt #{upcoming.upcomingCode}
            </span>
        ),

        icon: (
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                <img src={Upcoming} alt="Receipt" className="w-6 h-6" />
            </div>
        ),
        date: upcoming.dueDate,
        status: upcoming.paidDate ? "Paid" : "Due",
        body: (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-small-medium text-white">Amount</p>
                        <p className="body-regular font-semibold text-white">{upcoming.amount}</p>
                    </div>

                    <div>
                        <p className="text-small-medium text-white">Due Date</p>
                        <p className="body-regular font-semibold text-white">{upcoming.dueDate}</p>
                    </div>

                    <div>
                        <p className="text-small-medium text-white">Type</p>
                        <p className="body-regular font-semibold text-white">{upcoming.type}</p>
                    </div>

                    <div>
                        <p className="text-small-medium text-white">Paid Date</p>
                        <p className="body-regular font-semibold text-white">{upcoming.paidDate}</p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <GlassButton
                        onClick={() => console.log(`Download ${upcoming.upcomingCode}`)}
                        className="mt-6"
                        buttonClassName="px-24 py-2.5 text-center shadow-figma-drop"
                    >
                        <div className="flex items-center justify-center gap-2 w-full">
                            <Download className="w-4 h-4" />
                            <span>Download</span>
                        </div>
                    </GlassButton>
                </div>
            </div>
        ),
    }));


    return (
        <Accordian
            items={accordianItems}
            defaultOpenId={defaultOpenId}
            openItemId={openItemId}
            onOpenItemIdChange={onOpenItemIdChange}
        />
    );
};

export default UpcomingAccordian;
