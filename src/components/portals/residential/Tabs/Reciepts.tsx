import ReceiptAccordian, { type ReceiptItem } from "../accordian/recieptaccordian";


const receiptData: ReceiptItem[] = [
  {
    id: "inv-2025-11",
    title: "Monthly Rent - November 2025",
    receiptCode: "INV-2025-11",
    amount: "QAR 2,500",
    dueDate: "Dec 10, 2025",
    paidDate: "Nov 28, 2024",
    type: "Rent",
  },
  {
    id: "inv-2025-12",
    title: "Monthly Rent - December 2025",
    receiptCode: "INV-2025-12",
    amount: "QAR 2,500",
    dueDate: "Jan 10, 2026",
    paidDate: "Dec 20, 2025",
    type: "Rent",
  },
  {
    id: "inv-2026-01",
    title: "Monthly Rent - January 2026",
    receiptCode: "INV-2026-01",
    amount: "QAR 2,500",
    dueDate: "Feb 10, 2026",
    paidDate: "Jan 30, 2026",
    type: "Rent",
  },
];

const Reciepts = () => {
  return (
    <section className="w-full">
      <ReceiptAccordian receipts={receiptData} />
    </section>
  );
};

export default Reciepts;