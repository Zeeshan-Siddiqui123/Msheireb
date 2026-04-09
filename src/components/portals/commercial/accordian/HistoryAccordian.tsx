import { Download } from "lucide-react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";
import GlassButton from "../../../common/ui/GlassButton";
import History from "/src/assets/svg/reciept.svg";

export interface HistoryItem {
    id: string;
    title: string;
    historyCode: string;
    amount: string;
    dueDate: string;
    paidDate: string;
    type: string;
}

interface HistoryAccordianProps {
    histories: HistoryItem[];
    defaultOpenId?: string | null;
    openItemId?: string | null;
    onOpenItemIdChange?: (id: string | null) => void;
}

const HistoryAccordian = ({ histories, defaultOpenId = null, openItemId, onOpenItemIdChange }: HistoryAccordianProps) => {
    const accordianItems: AccordianItem[] = histories.map((history) => ({
        id: history.id,
        title: history.title,
        subtitle: `Receipts #${history.historyCode}`,
        date: history.paidDate || history.dueDate,
        status: "Completed",
        icon: <img src={History} alt="history" className="w-12 h-12" />,
        body: (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-small-medium text-white/80">Amount</p>
                        <p className="text-regular-bold text-white">{history.amount}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Due Date</p>
                        <p className="text-regular-bold text-white">{history.dueDate}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Type</p>
                        <p className="text-regular-bold text-white">{history.type}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Paid Date</p>
                        <p className="text-regular-bold text-white">{history.paidDate}</p>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                    <GlassButton
                        onClick={() => console.log(`Download history ${history.historyCode}`)}
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
            defaultOpenId={defaultOpenId}
            openItemId={openItemId}
            onOpenItemIdChange={onOpenItemIdChange}
        />
    );
};

export default HistoryAccordian;
