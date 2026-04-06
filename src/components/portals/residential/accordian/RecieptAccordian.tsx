import { Download } from "lucide-react";
import Accordian from "../../../common/Accordian";
import type { AccordianItem } from "../../../common/Accordian";
import GlassButton from "../../../common/GlassButton";
import Receipt from "/src/assets/reciept.png";

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

interface ReceiptBodyProps {
    amount: string;
    dueDate: string;
    type: string;
    paidDate: string;
    code: string;
}

const ReceiptBody = ({
    amount,
    dueDate,
    type,
    paidDate,
    code,
}: ReceiptBodyProps) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <p className="text-small-medium text-white">Amount</p>
                    <p className="body-regular font-semibold text-white">{amount}</p>
                </div>

                <div>
                    <p className="text-small-medium text-white">Due Date</p>
                    <p className="body-regular font-semibold text-white">{dueDate}</p>
                </div>

                <div>
                    <p className="text-small-medium text-white">Type</p>
                    <p className="body-regular font-semibold text-white">{type}</p>
                </div>

                <div>
                    <p className="text-small-medium text-white">Paid Date</p>
                    <p className="body-regular font-semibold text-white">{paidDate}</p>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <GlassButton
                    onClick={() => console.log(`Download ${code}`)}
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
    );
};

const ReceiptAccordian = ({ receipts }: ReceiptAccordianProps) => {
    const accordianItems: AccordianItem[] = receipts.map((receipt) => ({
        id: receipt.id,

        title: (
            <span className="body-regular font-bold text-white">
                {receipt.title}
            </span>
        ),

        subtitle: (
            <span className="text-small-regular font-semibold text-white">
                Receipt #{receipt.receiptCode}
            </span>
        ),

        icon: (
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                <img src={Receipt} alt="Receipt" className="w-6 h-6" />
            </div>
        ),

        /* ✅ CLEAN BODY */
        body: (
            <ReceiptBody
                amount={receipt.amount}
                dueDate={receipt.dueDate}
                type={receipt.type}
                paidDate={receipt.paidDate}
                code={receipt.receiptCode}
            />
        ),
    }));

    return <Accordian items={accordianItems} />;
};

export default ReceiptAccordian;
