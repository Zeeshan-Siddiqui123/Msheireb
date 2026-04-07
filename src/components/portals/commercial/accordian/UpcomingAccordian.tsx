import { Download } from "lucide-react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";
import GlassButton from "../../../common/GlassButton";
import Upcoming from "/src/assets/svg/reciept.svg";

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

const UpcomingAccordian = ({ upcomings }: UpcomingAccordianProps) => {
    const accordianItems: AccordianItem[] = upcomings.map((upcoming) => ({
        id: upcoming.id,
        title: upcoming.title,
        subtitle: `Receipts #${upcoming.upcomingCode}`,
        date: upcoming.dueDate,
        status: upcoming.paidDate ? "Paid" : "Due",
        icon: <img src={Upcoming} alt="upcoming" className="w-12 h-12" />,
        body: (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-small-medium text-white/80">Amount</p>
                        <p className="text-regular-bold text-white">{upcoming.amount}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Due Date</p>
                        <p className="text-regular-bold text-white">{upcoming.dueDate}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Type</p>
                        <p className="text-regular-bold text-white">{upcoming.type}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Paid Date</p>
                        <p className="text-regular-bold text-white">{upcoming.paidDate}</p>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                    <GlassButton
                        onClick={() => console.log(`Download upcoming ${upcoming.upcomingCode}`)}
                        className="mt-6"
                        buttonClassName="px-24 py-2.5 text-center"
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
        />
    );
};

export default UpcomingAccordian;
