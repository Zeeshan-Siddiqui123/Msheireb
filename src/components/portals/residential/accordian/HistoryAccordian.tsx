import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";

export interface HistoryItem {
    id: string;
    title: string;
    historyCode: string;
    amount: string;
    date: string;
    status: string;
    note?: string;
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
        subtitle: `History #${history.historyCode}`,
        // value: history.amount,
        body: (
            <div>
                <span className="text-small-regular bg-white w-10 h-6 px-6 py-1 rounded-full text-black">{history.status}</span>
                <div>
                    <p className="label-small-semibold">Amount</p>
                    <p className="heading-medium-bold">{history.amount}</p>
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
