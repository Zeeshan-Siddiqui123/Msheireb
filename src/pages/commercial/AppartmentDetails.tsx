import { useState } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import RegisterVehicle from './RegisterVehicle';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import PageHeader from '../../components/portals/commercial/PageHeader';
import Space from '../../components/portals/commercial/Tabs/AppartmetDetails/Space';
import Lease from '../../components/portals/commercial/Tabs/AppartmetDetails/Lease';
import Parking from '../../components/portals/commercial/Tabs/AppartmetDetails/Parking';
import CarLogs from '../../components/portals/commercial/Tabs/AppartmetDetails/CarLogs';

export default function CommercialAppartmentDetails() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("space");

  const apartmentTabs = [
    {
      key: "space",
      title: "Space",
      content: <Space />
    },
    {
      key: "lease",
      title: "Lease",
      content: <Lease />
    },
    {
      key: "parking",
      title: "Parking",
      content: <Parking onRegister={() => setIsRegistering(true)} />
    },
    {
      key: "logs",
      title: "Car Logs",
      content: <CarLogs />
    }
  ];


  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
      <section className="flex flex-col h-full w-full  py-2">
        {isRegistering ? (
          <RegisterVehicle onBack={() => setIsRegistering(false)} />
        ) : (
          <>
            {/* Header Area */}
            <PageHeader
              title={"Apartment Details"}
              description={"Your apartment information and documents"}
              backPath='/commercial'
              showTabs={!isRegistering}
              tabs={apartmentTabs}
              selectedTab={activeTab}
              onTabChange={setActiveTab}
            />
          </>
        )}
      </section>
    </DashboardLayout>
  );
}
