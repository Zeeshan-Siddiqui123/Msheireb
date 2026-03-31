import HistoryAccordian, { type HistoryItem } from "../accordian/HistoryAccordian";
import BaseCard, { CardBody, CardHeader } from "../../../common/BaseCard";
import QuickActionsWrapper from "../../../common/QuickActionsWrapper";

const historyData: HistoryItem[] = [
  {
    id: "history-001",
    title: "Monthly Rent - November 2025",
    historyCode: "HIS-2025-11",
    amount: "QAR 2,500",
    dueDate: "Jan 10, 2026",
    paidDate: "Dec 20, 2025",
    type: "Rent",
  },
];

const History = () => {
  return (
    <section className="space-y-4 w-full">
      <HistoryAccordian histories={historyData} />
      <QuickActionsWrapper>
      <BaseCard>
        <CardHeader></CardHeader>
        <CardBody></CardBody>
      </BaseCard>
      </QuickActionsWrapper>
    </section>
  );
};

export default History;