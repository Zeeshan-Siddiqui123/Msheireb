import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import PageHeader from '../../components/portals/commercial/PageHeader';
import BaseCard, { CardBody, CardFooter, CardHeader } from '../../components/common/BaseCard';
import GlassButton from '../../components/common/GlassButton';

const CommercialLeaseManagement = () => {
  const leaseDetails = [
    { label: "Start Date", value: "Jan 1, 2025" },
    { label: "Monthly Rent", value: "QAR 2,500" },
    { label: "Security Deposit", value: "QAR 5,000" },
    { label: "Status", value: "Active" },
  ];

  return (
    <DashboardLayout
      leftSidebar={<LeftSidebarContent />}
    >
      <section className="flex flex-col h-full w-full py-2">
        <PageHeader
          title="Lease Management"
          backPath="/commercial"
          showTabs={false}
        />
        
        {/* Lease Agreement Card */}
        <BaseCard className='w-full p-4 flex flex-col mt-2 gap-0'>
          <CardHeader>
            <h3 className='heading-medium-regular text-white mt-4'>Lease Agreement</h3>
          </CardHeader>
          <CardBody className='grid grid-cols-4 gap-4 mt-6'>
            {leaseDetails.map((detail, index) => (
              <div key={index} className='flex flex-col gap-1'>
                <span className='text-small-regular text-white'>{detail.label}</span>
                <span className='text-small-medium text-white'>{detail.value}</span>
              </div>
            ))}
          </CardBody>
          <CardFooter className='mt-5 mb-6'>
            <GlassButton className="w-full" buttonClassName='shadow-figma-drop' size="large">Download</GlassButton>
          </CardFooter>
        </BaseCard>

        {/* Lease Renewal 2025 Card */}
        <BaseCard className='w-full p-4 flex flex-col gap-0 mt-8'>
          <CardHeader>
            <h3 className='heading-medium-regular text-white mt-4'>Lease Renewal 2025</h3>
          </CardHeader>
          <CardBody className='flex flex-col gap-4 mt-2'>
            <p className='text-small-regular text-white'>Annual lease renewal for Unit 1204</p>
            <div className='flex flex-col gap-1'>
              <p className='text-small-regular text-white'>Submitted: 2025-12-10</p>
              <p className='text-small-regular text-white'>Approver: Property Manager</p>
            </div>
          </CardBody>
          <CardFooter className='mt-5 mb-6'>
            <GlassButton className="w-full" buttonClassName='shadow-figma-drop' size="large">Download</GlassButton>
          </CardFooter>
        </BaseCard>
      </section>
    </DashboardLayout>
  )
}

export default CommercialLeaseManagement;