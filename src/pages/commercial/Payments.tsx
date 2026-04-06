import PageHeader from '../../components/portals/residential/PageHeader';
import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { useState } from 'react';
import Reciepts from '../../components/portals/commercial/Tabs/Payments/Reciepts';
import Upcoming from '../../components/portals/commercial/Tabs/Payments/Upcoming';
import History from '../../components/portals/commercial/Tabs/Payments/History';

const CommercialPayments = () => {
    const [selectedTab, setSelectedTab] = useState("reciepts");

    // Tab content mapping
    const tabContent = {
        reciepts: {
            title: "Payments and Receipts",
            desc: "Manage your payments and receipts",
        },
        upcoming: {
            title: "Payments and Receipts",
            desc: "Manage your payments and receipts",
        },
        history: {
            title: "Payments and Receipts",
            desc: "Manage your payments and receipts",
        }
    };

    const currentContent = tabContent[selectedTab as keyof typeof tabContent] || tabContent.reciepts;

    const homeServiceTabs = [
        {
            key: "reciepts",
            title: "Reciepts",
            content: <Reciepts />
        },
        {
            key: "upcoming",
            title: "Upcoming",
            content: <Upcoming />
        },
        {
            key: "history",
            title: "History",
            content: <History />
        }
    ];

    return (
        <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
            <section className="flex flex-col h-full w-full py-2">
                <PageHeader
                    title={currentContent.title}
                    description={currentContent.desc}
                    backPath="/home"
                    showTabs={true}
                    tabs={homeServiceTabs.map(tab => ({
                        key: tab.key,
                        title: tab.title
                    }))}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}

                    belowTabsContent={
                        <div className='flex -mt-3 flex-col items-center justify-center border gap-2 border-white w-full py-3 rounded-xl'>
                            <p>Outstanding Amount</p>
                            <p className="heading-medium-bold">QAR 2,500</p>
                        </div>
                    }
                />
                <div className="w-full flex-grow flex flex-col mt-6">
                    {selectedTab === "reciepts" && <Reciepts />}
                    {selectedTab === "upcoming" && <Upcoming />}
                    {selectedTab === "history" && <History />}
                </div>
            </section>
        </DashboardLayout>
    );
}

export default CommercialPayments;