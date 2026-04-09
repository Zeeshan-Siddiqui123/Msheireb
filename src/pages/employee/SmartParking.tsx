import DashboardLayout from '../../components/common/DashboardLayout'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import BaseCard, { CardBody, CardHeader } from '../../components/common/ui/BaseCard';
import { CarFront, CircleParking } from 'lucide-react';
import StatusChip from '../../components/common/ui/Chip';
import PageHeader from '../../components/common/PageHeader';

const SmartParking = () => {
  const vehicles = [
    {
      id: 1,
      model: "2023 Tesla Model 3",
      details: "White • ABC-1234",
      status: "Parked",
      spot: "P-A-145",
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      model: "2023 Ford Mustang",
      details: "Red • XYZ-1234",
      status: "In Motion",
      spot: "P-A-145",
      lastActivity: "30 minutes ago"
    },
    {
      id: 3,
      model: "2023 Honda Civic",
      details: "Green • ABC-1234",
      status: "In Motion",
      spot: "P-A-145",
      lastActivity: "1 Hours ago"
    },
    {
      id: 3,
      model: "2023 Toyota Camry",
      details: "Black • ABC-1234",
      status: "Changing",
      spot: "P-A-145",
      lastActivity: "30 minutes ago"
    }
  ];
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />}>
      <PageHeader title="Smart Parking" description='Reserve your spot with automated parking' backPath='/employee' />
      {vehicles.map((vehicle) => (
        <BaseCard
          key={vehicle.id}
          className="rounded-lg relative overflow-hidden transition-all duration-300 hover:bg-white/15 shadow-figma-drop"
        >
          {/* Header */}
          <CardHeader className="flex justify-between items-start w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-[#e0eefa] text-black p-3 rounded-[12px] shadow-sm flex items-center justify-center">
                <CarFront size={28} strokeWidth={2} />
              </div>

              <div className="flex flex-col">
                <h3 className="text-small-semibold mb-0.5">
                  {vehicle.model}
                </h3>
                <p className="text-small-regular">
                  {vehicle.details}
                </p>
              </div>
            </div>

            <StatusChip status={vehicle.status} />
          </CardHeader>

          {/* Body */}
          <CardBody className="flex justify-between items-center mt-6 pr-4">
            <div className="flex items-center gap-2 text-small-regular">
              <CircleParking size={18} strokeWidth={2} />
              <span>Parking Spot</span>
              <span className="ml-2">{vehicle.spot}</span>
            </div>

            <div className="flex items-center gap-2 ">
              <span className='text-small-regular'>Last Activity</span>
              <span className="ml-2 text-small-regular">{vehicle.lastActivity}</span>
            </div>
          </CardBody>
        </BaseCard>
      ))}
    </DashboardLayout>
  )
}

export default SmartParking