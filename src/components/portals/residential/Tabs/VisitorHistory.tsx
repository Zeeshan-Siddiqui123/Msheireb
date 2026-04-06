import BaseCard, { CardBody, CardFooter, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";
import { Phone, CheckCircle } from "lucide-react";

interface ActiveVisitor {
  id: string;
  name: string;
  visitType: string;
  phone: string;
  checkedIn: string;
  status: "Pending" | "Confirmed";
}

const activeVisitors: ActiveVisitor[] = [
  {
    id: "av-001",
    name: "John Doe",
    visitType: "Personal Visit",
    phone: "+1 (555) 123-4567",
    checkedIn: "Today, 2:15 PM",
    status: "Pending",
  },
  {
    id: "av-002",
    name: "John Doe",
    visitType: "Personal Visit",
    phone: "+1 (555) 123-4567",
    checkedIn: "Today, 2:15 PM",
    status: "Pending",
  },
];

const statusConfig = {
  Pending: "bg-white text-[#760022]",
  Confirmed: "bg-white text-[#3F6158]",
};

const VisitorHistory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 gap-4 w-full">
      {activeVisitors.map((visitor) => (
        <BaseCard key={visitor.id}>
          {/* Header: Name + Status Badge */}
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="heading-medium-bold text-white">{visitor.name}</h3>
                <p className="text-small-regular text-white/80 mt-0.5">{visitor.visitType}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-inter-xs font-semibold shrink-0 ${statusConfig[visitor.status]}`}
              >
                {visitor.status}
              </span>
            </div>
          </CardHeader>

          {/* Info: Phone + Checked In (stacked) */}
          <CardBody className="mt-3 space-y-1.5">
            <span className="flex items-center gap-1.5 text-small-regular text-white/90">
              <Phone size={12} className="shrink-0 text-white/70" />
              {visitor.phone}
            </span>
            <span className="flex items-center gap-1.5 text-small-regular text-white/90">
              <CheckCircle size={12} className="shrink-0 text-white/70" />
              Checked in: {visitor.checkedIn}
            </span>
          </CardBody>

          {/* Check Out Button */}
          <CardFooter className="mt-4">
            <GlassButton className="w-full" buttonClassName="shadow-figma-drop rounded-full" size="large">
              Check Out
            </GlassButton>
          </CardFooter>
        </BaseCard>
      ))}
    </div>
  );
};

export default VisitorHistory;