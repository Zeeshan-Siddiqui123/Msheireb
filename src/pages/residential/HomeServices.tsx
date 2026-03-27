import { Airplay, Lightbulb, Lock, Settings2, ChevronLeft } from 'lucide-react';
import { Tabs, Tab } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/common/DashboardLayout';
import ProfileCard from '../../components/portals/residential/ProfileCard';
import QuickActions from '../../components/portals/residential/QuickActions';
import Services from '../../components/portals/residential/Tabs/Services';
import Maintenance from '../../components/portals/residential/Tabs/Maintenance';
import Bookings from '../../components/portals/residential/Tabs/Bookings';
import { useState } from 'react';


export default function HomeServices() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("services");
  const [showServices, setShowServices] = useState(false);

  // Tab content mapping
  const tabContent = {
    services: {
      title: "My Services",
      desc: "Choose a category to help us understand the problem",
    },
    maintenance: {
      title: showServices ? "Create New Request": "My Services" ,
      desc: showServices 
        ? "Book services and manage maintenance requests"
        : "Choose a category to help us understand the problem",
    },
    mybooking: {
      title: "My Bookings",
      desc: "View and manage your current service bookings",
    },
  };

  const currentContent = tabContent[selectedTab as keyof typeof tabContent];

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
      <section className="flex flex-col h-full w-full max-w-6xl mx-auto px-4 py-2">
        {/* Header Area */}
        <div className="relative flex items-center justify-center mb-1">
          <button
            onClick={() => {
              if (selectedTab === 'maintenance' && showServices) {
                setShowServices(false);
              } else {
                navigate('/');
              }
            }}
            className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <h1 className="text-xl font-bold text-white tracking-wide">
            {currentContent.title}
          </h1>
        </div>
        <p className="text-sm text-white/90 mb-6 text-center">
          {currentContent.desc}
        </p>

        {/* Tabs Area */}
        <div className="w-full flex-grow flex flex-col">
          <Tabs
            aria-label="Home Services Options"
            fullWidth
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key as string)}
            classNames={{
              tabList: "bg-white/20 rounded-full border border-white/10 mb-2 gap-2",
              cursor: "bg-white rounded-full drop-shadow-sm",
              tab: "h-9",
              tabContent: "group-data-[selected=true]:text-black group-data-[selected=true]:font-bold text-white/95 font-medium text-[15px] tracking-wide"
            }}
          >
            <Tab key="services" title="Services">
              <Services />
            </Tab>
            <Tab key="maintenance" title="Maintenance">
              <Maintenance 
                showServices={showServices} 
                setShowServices={setShowServices} 
              />
            </Tab>
            <Tab key="mybooking" title="My Booking">
              <Bookings />
            </Tab>
          </Tabs>
        </div>
      </section>
    </DashboardLayout>
  );
}
