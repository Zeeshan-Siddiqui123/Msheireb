import BaseCard, { CardBody, CardFooter, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";
import { Phone, Mail, CalendarClock, QrCode } from "lucide-react";

interface Visitor {
  id: string;
  name: string;
  visitType: string;
  phone: string;
  email: string;
  dateTime: string;
  qrCode: string;
  status: "Pending" | "Confirmed";
}

const visitors: Visitor[] = [
  {
    id: "v-001",
    name: "John Doe",
    visitType: "Personal Visit",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    dateTime: "Today, 3:00 PM",
    qrCode: "QR-123456",
    status: "Pending",
  },
  {
    id: "v-002",
    name: "Jane Smith",
    visitType: "Meeting",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    dateTime: "Today, 3:00 PM",
    qrCode: "QR-123456",
    status: "Confirmed",
  },
];

const statusConfig = {
  Pending: "bg-white text-[#760022]",
  Confirmed: "bg-white text-[#3F6158]",
};

const Pending = () => {
  return (
    <div className="space-y-4 w-full">
      {visitors.map((visitor) => (
        <BaseCard key={visitor.id}>
          {/* Header: Name + Status Badge */}
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="heading-medium-bold text-white">{visitor.name}</h3>
                <p className="text-small-regular text-white/80 mt-0.5">{visitor.visitType}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1  text-inter-xs   font-semibold shrink-0 ${statusConfig[visitor.status]}`}
              >
                {visitor.status}
              </span>
            </div>
          </CardHeader>

          {/* Info Row: Phone, Email, DateTime, QR */}
          <CardBody className="mt-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="flex items-center gap-1.5 text-small-regular text-white/90">
                <Phone size={12} className="shrink-0 text-white/70" />
                {visitor.phone}
              </span>
              <span className="flex items-center gap-1.5 text-small-regular text-white/90">
                <Mail size={12} className="shrink-0 text-white/70" />
                {visitor.email}
              </span>
              <span className="flex items-center gap-1.5 text-small-regular text-white/90">
                <CalendarClock size={12} className="shrink-0 text-white/70" />
                {visitor.dateTime}
              </span>
              <span className="flex items-center gap-1.5 text-small-regular text-white/90">
                <QrCode size={12} className="shrink-0 text-white/70" />
                {visitor.qrCode}
              </span>
            </div>
          </CardBody>

          {/* Action Buttons */}
          <CardFooter className="mt-4">
            <div className="flex items-center flex-wrap gap-3">
              <GlassButton className="flex-1" buttonClassName="shadow-figma-drop py-3">
                Approve
              </GlassButton>
              <GlassButton className="flex-1" buttonClassName="py-3 shadow-figma-drop">
                Deny
              </GlassButton>
              <GlassButton className="flex-1" buttonClassName="py-3 flex items-center justify-center shadow-figma-drop">
                <img src="/src/assets/code-qr-scan.png" alt="" />
              </GlassButton>
            </div>
          </CardFooter>
        </BaseCard>
      ))}
    </div>
  );
};

export default Pending;