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
  const [selectedTab, setSelectedTab] = useState("services");
  const [showServices, setShowServices] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Tab content mapping
  const tabContent = {
    services: {
      title: "My Services",
      desc: "Choose a category to help us understand the problem",
    },
    maintenance: {
      title: showForm
        ? "Fill in your request"
        : showServices ? "Create New Request" : "My Services",
      desc: showForm
        ? "Please provide the details below"
        : showServices
          ? "Book services and manage maintenance requests"
          : "Choose a category to help us understand the problem",
    },
    mybooking: {
      title: "My Bookings",
      desc: "View and manage your current service bookings",
    },
  };

  const currentContent = tabContent[selectedTab as keyof typeof tabContent];
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
      content: (
        <Maintenance
          showServices={showServices}
          setShowServices={setShowServices}
          showForm={showForm}
          setShowForm={setShowForm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )
    },
    {
      key: "mybooking",
      title: "My Booking",
      content: <Bookings />
    }
  ];


  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
      <section className="flex flex-col h-full w-full max-w-3xl mx-auto px-4 py-2">
        {/* Header Area */}
        <div className="relative flex items-center justify-center mb-1">
          <button
            onClick={() => {
              if (selectedTab === 'maintenance') {
                if (showForm) {
                  setShowForm(false);
                } else if (showServices) {
                  setShowServices(false);
                } else {
                  navigate('/');
                }
              } else {
                navigate('/');
              }
            }}
            className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <h1 className="heading-medium-bold tracking-wide mb-6">
            {currentContent.title}
          </h1>
        </div>
        <p className="body-regular text-center mb-6">
          {currentContent.desc}
        </p>

        {/* Tabs Area */}
        <div className="w-full flex-grow flex flex-col">
          {showForm ? (
            <Maintenance
              showServices={showServices}
              setShowServices={setShowServices}
              showForm={showForm}
              setShowForm={setShowForm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ) : (
            <GlassTabs
              items={homeServiceTabs}
              ariaLabel="Home Services Options"
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key as string)}
            />
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}
