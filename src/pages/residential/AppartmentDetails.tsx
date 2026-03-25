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

export default function AppartmentDetails() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const quickActionsData = [
    { icon: <Airplay size={24} strokeWidth={1.5} />, label: "HVAC" },
    { icon: <Lock size={24} strokeWidth={1.5} />, label: "Security" },
    { icon: <Lightbulb size={24} strokeWidth={1.5} />, label: "Lighting" },
    { icon: <Settings2 size={24} strokeWidth={1.5} />, label: "Automation" },
  ];

  const leftSidebar = (
    <ProfileCard
      name="Rakan"
      leasingType="Residential"
      validUntil="10/26"
      nationality="Expat"
      familyMembers={4}
      buildingRef="UNASSIGNED"
    />
  );

  const rightSidebar = (
    <>
      <h2 className="text-lg font-bold mb-4 ">Quick Actions</h2>
      <QuickActions actions={quickActionsData} />
    </>
  );
  return (
    <DashboardLayout leftSidebar={leftSidebar} rightSidebar={rightSidebar}>
      <section className="flex flex-col h-full w-full max-w-3xl mx-auto px-4 py-2">
        {isRegistering ? (
          <RegisterVehicle onBack={() => setIsRegistering(false)} />
        ) : (
          <>
            {/* Header Area */}
            <div className="relative flex items-center justify-center mb-1">
              <button 
                onClick={() => navigate('/')} 
                className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
              >
                <ChevronLeft size={28} strokeWidth={2} />
              </button>
              <h1 className="text-xl font-bold text-white tracking-wide">Apartment Details</h1>
            </div>
            <p className="text-sm text-white/90 mb-6 text-center">Your apartment information and documents</p>

            {/* Tabs Area */}
            <div className="w-full flex-grow flex flex-col">
              <Tabs
                aria-label="Apartment Options"
                fullWidth
                classNames={{
                  tabList: "bg-white/20 rounded-full border border-white/10 mb-2 gap-2",
                  cursor: "bg-white rounded-full drop-shadow-sm",
                  tab: "h-9",
                  tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:font-bold text-white/95 font-medium text-[15px] tracking-wide"
                }}
              >
                <Tab key="space" title="Space">
                  <Space />
                </Tab>
                <Tab key="lease" title="Lease" ><Lease /></Tab>
                <Tab key="parking" title="Parking" ><Parking onRegister={() => setIsRegistering(true)} /></Tab>
                <Tab key="storage" title="Storage" ><Storage /></Tab>
              </Tabs>
            </div>
          </>
        )}
      </section>
    </DashboardLayout>
  );
}
