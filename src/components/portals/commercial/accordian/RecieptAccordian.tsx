import { Download } from "lucide-react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";
import GlassButton from "../../../common/ui/GlassButton";
import Receipt from "/src/assets/svg/reciept.svg";

export interface ReceiptItem {
    id: string;
    title: string;
    receiptCode: string;
    amount: string;
    dueDate: string;
    paidDate: string;
    type: string;
}

interface ReceiptAccordianProps {
    receipts: ReceiptItem[];
}

const ReceiptAccordian = ({ receipts }: ReceiptAccordianProps) => {
    const accordianItems: AccordianItem[] = receipts.map((receipt) => ({
        id: receipt.id,
        title: receipt.title,
        subtitle: `Receipt #${receipt.receiptCode}`,
        icon: <img src={Receipt} alt="Receipt" className="w-12 h-12" />,
        body: (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-small-medium text-white/80">Amount</p>
                        <p className="text-regular-bold text-white">{receipt.amount}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Due Date</p>
                        <p className="text-regular-bold text-white">{receipt.dueDate}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Type</p>
                        <p className="text-regular-bold text-white">{receipt.type}</p>
                    </div>
                    <div>
                        <p className="text-small-medium text-white/80">Paid Date</p>
                        <p className="text-regular-bold text-white">{receipt.paidDate}</p>
                    </div>

                </div>
                <div className="flex items-center justify-center">
                    <GlassButton
                        onClick={() => console.log(`Download receipt ${receipt.receiptCode}`)}
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


    return <Accordian items={accordianItems} />;
};

export default ReceiptAccordian;
