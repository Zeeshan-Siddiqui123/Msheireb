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

export default function AppartmentDetails() {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent/>} rightSidebar={<RightSidebarContent/>}>
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
              <h1 className="heading-medium-bold mb-6">Apartment Details</h1>
            </div>
            <p className="body-regular text-center mb-6">Your apartment information and documents</p>

            {/* Tabs Area */}
            <div className="w-full flex-grow flex flex-col">
              <Tabs
                aria-label="Apartment Options"
                fullWidth
                classNames={{
                  tabList: "bg-white/20 rounded-full border border-white/10 mb-2 gap-2",
                  cursor: "bg-white rounded-full drop-shadow-sm",
                  tab: "h-8",
                  tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:font-bold text-white/95 tabs-heading-semi"
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
