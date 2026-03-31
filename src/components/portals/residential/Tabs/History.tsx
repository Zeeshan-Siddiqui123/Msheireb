import { useState } from "react";
import HistoryAccordian, { type HistoryItem } from "../accordian/HistoryAccordian";

const historyData: HistoryItem[] = [
  {
    id: "history-001",
    title: "Rent Payment - October 2025",
    historyCode: "HIS-2025-10",
    amount: "QAR 2,500",
    date: "Oct 10, 2025",
    status: "Completed",
    // note: "Auto debit via credit card",
  },
];

const History = () => {
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>("history-001");

  return (
    <section className="space-y-4 w-full">
      <HistoryAccordian
        histories={historyData}
        openItemId={activeHistoryId}
        onOpenItemIdChange={setActiveHistoryId}
      />
    </section>
  );
};

export default History;