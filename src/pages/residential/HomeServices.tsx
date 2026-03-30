import { Airplay, Lightbulb, Lock, Settings2, ChevronLeft } from 'lucide-react';
import { Tabs, Tab } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/common/DashboardLayout';
import ProfileCard from '../../components/portals/residential/ProfileCard';
import QuickActions from '../../components/portals/residential/QuickActions';
import Services from '../../components/portals/residential/Tabs/Services';
import Maintenance from '../../components/portals/residential/Tabs/Maintenance';
import Bookings from '../../components/portals/residential/Tabs/Bookings';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { useState } from 'react';
import { GlassTabs } from '../../components/common/GlassTabs';


export default function HomeServices() {
  const navigate = useNavigate();
   const [activeTab, setActiveTab] = useState("services");

  const homeServiceTabs = [
    { 
      key: "services", 
      title: "Services", 
      content: <Services /> 
    },
    { 
      key: "maintenance", 
      title: "Maintenance", 
      content: <Maintenance /> 
    },
    { 
      key: "mybooking", 
      title: "My Booking", 
      content: <Bookings /> 
    }
  ];


  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent/>} rightSidebar={<RightSidebarContent/>}>
      <section className="flex flex-col h-full w-full max-w-3xl mx-auto px-4 py-2">
        {/* Header Area */}
        <div className="relative flex items-center justify-center mb-1">
          <button 
            onClick={() => navigate('/')} 
            className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <h1 className="heading-medium-bold tracking-wide mb-6">My Services</h1>
        </div>
        <p className="body-regular text-center mb-6">Choose a category to help us understand the problem</p>

        {/* Tabs Area */}
        <div className="w-full flex-grow flex flex-col">
           <GlassTabs
      items={homeServiceTabs}
      ariaLabel="Home Services Options"
      selectedKey={activeTab}
      onSelectionChange={(key) => setActiveTab(key as string)}
    />
        </div>
      </section>
    </DashboardLayout>
  );
}
