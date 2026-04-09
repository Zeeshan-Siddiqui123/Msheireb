import PageHeader from '../../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/common/DashboardLayout';
import Services from '../../components/portals/residential/Tabs/HomeServices/Services';
import Maintenance from '../../components/portals/residential/Tabs/HomeServices/Maintenance';
import Bookings from '../../components/portals/residential/Tabs/HomeServices/Bookings';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { useState } from 'react';

export default function HomeServices() {
  const navigate = useNavigate();

  // Tabs state
  const [selectedTab, setSelectedTab] = useState("services");

  // Maintenance internal state
  const [showServices, setShowServices] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔹 Header content mapping
  const tabContent = {
    services: {
      title: "My Services",
      desc: "Choose a category to help us understand the problem",
    },
    maintenance: {
      title: showForm
        ? "Fill in your request"
        : showServices
          ? "Create New Request"
          : "My Services",
      desc: showForm
        ? ""
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

  // 🔹 Tabs (ONLY navigation, no content)
  const homeServiceTabs = [
    { key: "services", title: "Services" },
    { key: "maintenance", title: "Maintenance" },
    { key: "mybooking", title: "My Booking" }
  ];

  // 🔹 Back handling
  const handleBack = () => {
    if (selectedTab === 'maintenance') {
      if (showForm) {
        setShowForm(false);
      } else if (showServices) {
        setShowServices(false);
      } else {
        navigate('/residential');
      }
    } else {
      navigate('/residential');
    }
  };

  return (
    <DashboardLayout
      leftSidebar={<LeftSidebarContent />}
      rightSidebar={<RightSidebarContent />}
    >
      <section className="flex flex-col h-full w-full py-2">

        {/* 🔹 Header + Tabs */}
        <PageHeader
          title={currentContent.title}
          description={currentContent.desc}
          onBack={handleBack}
          showTabs={!showForm} // 👈 FORM pe tabs hide
          tabs={homeServiceTabs}
          selectedTab={selectedTab}
          onTabChange={(key) => setSelectedTab(key)}
        />

        {/* 🔹 Content Area */}
        <div className="w-full grow flex flex-col ">

          {selectedTab === "services" && (
            <Services />
          )}

          {selectedTab === "maintenance" && (
            <Maintenance
              showServices={showServices}
              setShowServices={setShowServices}
              showForm={showForm}
              setShowForm={setShowForm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}

          {selectedTab === "mybooking" && (
            <Bookings />
          )}

        </div>
      </section>
    </DashboardLayout>
  );
}