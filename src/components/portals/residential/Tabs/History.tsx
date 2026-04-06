import HistoryAccordian, { type HistoryItem } from "../accordian/HistoryAccordian";
import BaseCard, { CardBody, CardHeader } from "../../../common/BaseCard";
import StatusChip from "../../../common/Chip";

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
              <h3 className="body-regular font-bold  text-white">Rent Payment - December 2025</h3>
              <p className="text-small-regular flex gap-2 mt-1 items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 4H10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.5 1V2M8.5 1V2M3.75 6C3.75 6.13807 3.63807 6.25 3.5 6.25C3.36193 6.25 3.25 6.13807 3.25 6M3.75 6C3.75 5.86193 3.63807 5.75 3.5 5.75C3.36193 5.75 3.25 5.86193 3.25 6M3.75 6H3.25M6.25 6C6.25 6.13807 6.13807 6.25 6 6.25C5.86193 6.25 5.75 6.13807 5.75 6M6.25 6C6.25 5.86193 6.13807 5.75 6 5.75C5.86193 5.75 5.75 5.86193 5.75 6M6.25 6H5.75M8.75 6C8.75 6.13807 8.63807 6.25 8.5 6.25C8.36193 6.25 8.25 6.13807 8.25 6M8.75 6C8.75 5.86193 8.63807 5.75 8.5 5.75C8.36193 5.75 8.25 5.86193 8.25 6M8.75 6H8.25M3.75 8.5C3.75 8.63807 3.63807 8.75 3.5 8.75C3.36193 8.75 3.25 8.63807 3.25 8.5M3.75 8.5C3.75 8.36193 3.63807 8.25 3.5 8.25C3.36193 8.25 3.25 8.36193 3.25 8.5M3.75 8.5H3.25M6.25 8.5C6.25 8.63807 6.13807 8.75 6 8.75C5.86193 8.75 5.75 8.63807 5.75 8.5M6.25 8.5C6.25 8.36193 6.13807 8.25 6 8.25C5.86193 8.25 5.75 8.36193 5.75 8.5M6.25 8.5H5.75M8.75 8.5C8.75 8.63807 8.63807 8.75 8.5 8.75C8.36193 8.75 8.25 8.63807 8.25 8.5M8.75 8.5C8.75 8.36193 8.63807 8.25 8.5 8.25C8.36193 8.25 8.25 8.36193 8.25 8.5M8.75 8.5H8.25M3 10.5H9C9.82843 10.5 10.5 9.82843 10.5 9V3C10.5 2.17157 9.82843 1.5 9 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V9C1.5 9.82843 2.17157 10.5 3 10.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Today, 3:00 PM</p>
            </div>
            <StatusChip status="Completed" />
          </div>
        </CardHeader>

        <CardBody className="mt-3">
          <p className="text-small-regular ">Amount</p>
          <p className="heading-medium-semibold text-18 ">QAR 2,500</p>
        </CardBody>
      </BaseCard>
    </section>
  );
};

export default History;
