import PageHeader from '../../components/common/PageHeader';
import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { useState } from 'react';
import Pending from '../../components/portals/residential/Tabs/Visitor/Pending';
import Active from '../../components/portals/residential/Tabs/Visitor/Active';
import VisitorHistory from '../../components/portals/residential/Tabs/Visitor/VisitorHistory';
import GlassButton from '../../components/common/ui/GlassButton';

const Visitor = () => {
    const [selectedTab, setSelectedTab] = useState("pending");

    // Tab content mapping
    const tabContent = {
        pending: {
            title: "Visitor Management",
            desc: "Pre-register and manage your visitors",
        },
        active: {
            title: "Visitor Management",
            desc: "Pre-register and manage your visitors",
        },
        history: {
            title: "Visitor Management",
            desc: "Pre-register and manage your visitors",
        }
    };

    const currentContent = tabContent[selectedTab as keyof typeof tabContent] || tabContent.pending;

    const homeServiceTabs = [
        {
            key: "pending",
            title: "Pending",
            content: <Pending />
        },
        {
            key: "active",
            title: "Active",
            content: <Active />
        },
        {
            key: "history",
            title: "History",
            content: <VisitorHistory />
        }
    ];

    return (
        <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
            <section className="flex flex-col h-full w-full py-2">
                <PageHeader
                    title={currentContent.title}
                    description={currentContent.desc}
                    backPath="/residential"
                    showTabs={true}
                    tabs={homeServiceTabs.map(tab => ({
                        key: tab.key,
                        title: tab.title
                    }))}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}

                    belowTabsContent={
                        <div className='flex justify-center -mt-5'>
                            <GlassButton className="w-1/2 "
                                buttonClassName=" shadow-figma-drop"
                                size="large">+ Pre-Register Visitor</GlassButton>
                        </div>
                    }
                />
                <div className="w-full grow flex flex-col mt-6">
                    {selectedTab === "pending" && <Pending />}
                    {selectedTab === "active" && <Active />}
                    {selectedTab === "history" && <VisitorHistory />}
                </div>
            </section>
        </DashboardLayout>
    );
}

export default Visitor;