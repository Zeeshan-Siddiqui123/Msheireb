import React from "react";
import { Star } from "lucide-react";
import GlassButton from "../../common/GlassButton";
import withCardContainer from "../../common/withCardContainer";
import QuickActionsWrapper from "../../common/QuickActionsWrapper";
import StatusChip from "../../common/Chip";

interface BookingCardProps {
  title: string;
  provider: string;
  startDate: string;
  endDate: string;
  providerName: string;
  providerImage: string;
  rating: number;
  status: string;
  icon: React.ReactNode;
}

const BookingCardContent: React.FC<BookingCardProps> = ({
  title,
  provider,
  startDate,
  endDate,
  providerName,
  providerImage,
  rating,
  status,
  icon,
}) => {
  return (
    <QuickActionsWrapper className="text-white p-4  h-full w-full">
      {/* Header: Icon and Status */}
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="w-12 h-12 rounded-xl bg-blue-200 flex items-center justify-center">
          {icon}
        </div>
        {/* <div className="bg-white/90 text-[#2D9B82] px-3 py-1 rounded-full text-[12px] font-bold">
          {status}
        </div> */}
        <StatusChip status={status} />
      </div>

      {/* Content: Title and Provider */}
      <h3 className="heading-medium-semibold mb-2">{title}</h3>
      <p className="body-regular mb-4">{provider}</p>

      {/* Dates row */}
      <div className="flex gap-16 mb-6">
        <div>
          <p className="text-small-regular mb-1">Start Date</p>
          <p className="body-regular">{startDate}</p>
        </div>
        <div>
          <p className="text-small-regular mb-1">End Date</p>
          <p className="body-regular">{endDate}</p>
        </div>
      </div>

      {/* Provider row */}
      <div className="flex items-center justify-between mb-6 w-full mt-auto">
        <div className="flex items-center gap-2">
          <img
            src={providerImage}
            alt={providerName}
            className="w-12 h-12 rounded-full border-2 border-white/40"
          />
          <span className="text-small-regular">{providerName}</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={14}
              className={s <= rating ? "fill-[#FF9500] text-[#FF9500]" : "text-white/40"}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-3 mb-3  w-full ">
        <GlassButton size="large" className="w-full  " buttonClassName="shadow-figma-drop">
          Reschedule
        </GlassButton>
        <GlassButton size="large" className="w-full   " buttonClassName="w-full shadow-figma-drop">
          Cancel
        </GlassButton>
      </div>
    </QuickActionsWrapper>
  );
};

const BookingCard = BookingCardContent;

export default BookingCard;