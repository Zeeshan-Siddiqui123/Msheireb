import { DoorOpen } from "lucide-react";
import BookingCard from "../BookingCard";

const Bookings = () => {
  const sampleBookings = [
    {
      id: 1,
      title: "Premium Cleaning",
      provider: "CleanPro Services",
      startDate: "2025-06-01",
      endDate: "2026-06-01",
      providerName: "John Doe",
      providerImage: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      rating: 4,
      status: "Confirmed",
      icon: <DoorOpen size={28} className="text-black" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Premium Cleaning",
      provider: "CleanPro Services",
      startDate: "2025-06-01",
      endDate: "2026-06-01",
      providerName: "John Doe",
      providerImage: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      rating: 4,
      status: "Confirmed",
      icon: <DoorOpen size={28} className="text-black" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {sampleBookings.map((booking) => (
        <BookingCard key={booking.id} {...booking} />
      ))}
    </div>
  );
};

export default Bookings;