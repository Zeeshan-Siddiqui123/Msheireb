import DashboardLayout from '../../components/common/DashboardLayout'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import PageHeader from '../../components/common/PageHeader'
import BaseCard, { CardBody } from '../../components/common/ui/BaseCard'
import { Video, PlayCircle } from 'lucide-react'

const resources = [
  {
    id: 1,
    title: "Smart Parking System Overview",
    subtitle: "Learn how to use the parking reservation and payment system",
    actionType: "play"
  },
  {
    id: 2,
    title: "Benefits of Smart Parking",
    subtitle: "Discover the advantages of smart parking solutions",
    actionType: "play"
  },
  {
    id: 3,
    title: "Getting Started with the App",
    subtitle: "A guide to downloading and setting up the app",
    actionType: "play"
  },
  {
    id: 4,
    title: "Payment Options Explained",
    subtitle: "Understand the various payment methods available",
    actionType: "learn_more"
  },
  {
    id: 5,
    title: "Troubleshooting Common Issues",
    subtitle: "Find solutions to frequently encountered problems",
    actionType: "learn_more"
  }
];

const TrainingAndResources = () => {
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />}>
      <PageHeader
        title="Training and Resources"
        description="Guides, videos, and documentation"
        backPath="/employee"
      />

      <div className="w-full space-y-3 ">
        {resources.map((resource) => (
          <BaseCard
            key={resource.id}
            className="cursor-pointer w-full transition-colors hover:bg-white/5 shadow-figma-drop"
          >
            <CardBody className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shrink-0 shadow-sm">
                  <Video size={24} className="text-[#102C57] stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="body-regular font-semibold m-0">
                    {resource.title}
                  </h3>
                  <p className="text-small-regular m-0 mt-0.5">
                    {resource.subtitle}
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-auto pt-2 md:pt-0">
                {resource.actionType === "play" ? (
                  <button className="flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                    <PlayCircle size={16} className="stroke-[1.5]" />
                    Play
                  </button>
                ) : (
                  <button className="flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                )}
              </div>
            </CardBody>
          </BaseCard>
        ))}
      </div>
    </DashboardLayout>
  )
}

export default TrainingAndResources