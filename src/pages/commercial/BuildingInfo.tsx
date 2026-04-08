import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import PageHeader from '../../components/portals/commercial/PageHeader';
import BaseCard, { CardBody, CardHeader } from '../../components/common/BaseCard';

const CommercialBuildingInfo = () => {

  const spaceDetails = [
    {
      label: "Building",
      value: "Tower A"
    },
    {
      label: "Floor",
      value: "12th Floor"
    },
    {
      label: "Unit Number",
      value: "1204"
    },
    {
      label: "Square Footage",
      value: "2,500 sq ft"
    },
    {
      label: "Type",
      value: "Office Space"
    }
  ]

  const systemIntegration = [
    {
      label: "Yardi Voyager",
      value: "Connected"
    },
    {
      label: "Salesforce",
      value: "Synced"
    }
  ]

  const documents = [
    { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    { name: "Parking Agreement", meta: "PDF • 850 kb • Jan 15, 2026" },
  ];

  return (
    <DashboardLayout
      leftSidebar={<LeftSidebarContent />}
      rightSidebar={<RightSidebarContent />}
    >
      <section className="flex flex-col h-full w-full py-2">
        <PageHeader
          title="Building Information"
          backPath="/commercial"
          showTabs={false}
        />
        <BaseCard className='w-full p-4 flex flex-col gap-6 '>
          <CardHeader>
            <h3 className='heading-medium-regular text-white mt-4'>Space Details</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-4 mt-4'>
            {spaceDetails.map((item, index) => (
              <div key={index} className='flex justify-between items-center'>
                <span className='text-small-regular text-white'>{item.label}</span>
                <span className='text-small-regular text-white'>{item.value}</span>
              </div>
            ))}
          </CardBody>
        </BaseCard>

        <div className="grid grid-cols-1 gap-4 mt-10">
          {documents.map((doc, idx) => (
            <BaseCard key={idx} className="">
              <CardBody className="flex relative items-start justify-between">
              <div className="flex items-center gap-4">
                <div className=" text-black  shadow-sm">
                  <img src="/src/assets/svg/clipboard.svg" alt="Clipboard" className='' />
                </div>
                <div className="flex flex-col w-36">
                  <p className="text-regular-bold mb-1">{doc.name}</p>
                  <span className="text-inter-xs">{doc.meta}</span>
                </div>
              </div>
              <button className="text-white hover:text-white/70 transition-colors p-2">
                <img src="/src/assets/svg/download.svg" alt="Download" className='' />
              </button>
              </CardBody>
            </BaseCard>
          ))}
        </div>

        <BaseCard className='w-full p-4 flex flex-col gap-6 mt-10'>
          <CardHeader>
            <h3 className='heading-medium-regular text-white'>System Integration</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-4 mt-4'>
            {systemIntegration.map((item, index) => (
              <div key={index} className='flex justify-between items-center'>
                <span className='text-small-regular text-white'>{item.label}</span>
                <span className='text-small-regular text-white'>{item.value}</span>
              </div>
            ))}
          </CardBody>
        </BaseCard>
      </section>
    </DashboardLayout>
  )
}

export default CommercialBuildingInfo