import UpcomingAccordian, { type UpcomingItem } from "../../accordian/UpcomingAccordian"

const upcomingData: UpcomingItem[] = [
  {
    id: "upcoming-001",
    title: "Monthly Rent - November 2025",
    upcomingCode: "INV-2025-11",
    amount: "QAR 2,500",
    dueDate: "Jan 10, 2026",
    paidDate: "Dec 20, 2025",
    type: "Rent",
  },
  {
    id: "upcoming-002",
    title: "Monthly Rent - December 2025",
    upcomingCode: "INV-2025-12",
    amount: "QAR 2,500",
    dueDate: "Feb 10, 2026",
    paidDate: "Jan 30, 2026",
    type: "Rent",
  },
]

import { useState } from "react";

const Upcoming = () => {
  const [activeUpcomingId, setActiveUpcomingId] = useState<string | null>("upcoming-001");

  return (
    <section className="w-full">
      <UpcomingAccordian
        upcomings={upcomingData}
        openItemId={activeUpcomingId}
        onOpenItemIdChange={setActiveUpcomingId}
      />
    </section>
  );
};

export default Upcoming