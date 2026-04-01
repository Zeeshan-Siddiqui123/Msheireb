import HistoryAccordian, { type HistoryItem } from "../accordian/HistoryAccordian";
import BaseCard, { CardBody, CardHeader } from "../../../common/BaseCard";

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
    <section className="space-y-6 w-full">
      <HistoryAccordian histories={historyData} />

      <BaseCard>
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="heading-medium-semibold text-white">Rent Payment - December 2025</h3>
              <p className="text-small-regular text-white/90">Today, 3:00 PM</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-small-regular text-black/80">
              Completed
            </span>
          </div>
        </CardHeader>

        <CardBody className="mt-3">
          <p className="text-small-regular uppercase tracking-wider text-white/90">Amount</p>
          <p className="heading-medium-bold text-white ">QAR 2,500</p>
        </CardBody>
      </BaseCard>
    </section>
  );
};

export default History;
