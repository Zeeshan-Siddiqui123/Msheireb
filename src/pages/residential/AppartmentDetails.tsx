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
      content: <Storage  /> 
    }
  ];

  
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
            <GlassTabs
        items={apartmentTabs} 
        ariaLabel="Apartment management"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
      />
            </div>
          </>
        )}
      </section>
    </DashboardLayout>
  );
}
