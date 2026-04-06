import { Airplay, Lightbulb, Lock, Settings2, ChevronLeft } from 'lucide-react';
import { Tabs, Tab } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import ProfileCard from '../../components/portals/residential/ProfileCard';
import QuickActions from '../../components/portals/residential/QuickActions';
import Space from '../../components/portals/residential/Tabs/Space';
import Lease from '../../components/portals/residential/Tabs/Lease';
import Parking from '../../components/portals/residential/Tabs/Parking';
import Storage from '../../components/portals/residential/Tabs/Storage';
import RegisterVehicle from './RegisterVehicle';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { GlassTabs } from '../../components/common/GlassTabs';
import PageHeader from '../../components/common/PageHeader';

export default function AppartmentDetails() {
  const navigate = useNavigate();
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
      key: "storage",
      title: "Storage",
      content: <Storage />
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
              backPath='/home'
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
