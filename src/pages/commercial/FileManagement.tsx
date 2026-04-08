import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import PageHeader from '../../components/portals/commercial/PageHeader';
import BaseCard, { CardBody, CardFooter } from '../../components/common/BaseCard';
import GlassButton from '../../components/common/GlassButton';

const CommercialFileManagement = () => {
  const documents = [
    { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    { name: "Parking Agreement", meta: "PDF • 850 kb • Jan 15, 2026" },
    { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    { name: "Parking Agreement", meta: "PDF • 850 kb • Jan 15, 2026" },
  ];

  const btnText = [
    { name: "All" },
    { name: "Contracts" },
    { name: "Visa Documents" },
    { name: "QID" },
    { name: "Parking" },
  ]

  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} >
      <section className="flex flex-col h-full w-full py-2">
        <PageHeader title="Document Management" backPath="/commercial" showTabs={false} />
        <div className='flex items-center md:justify-center gap-12 mb-3 overflow-x-auto scrollbar-hide'>
          {btnText.map((btn, idx) => (
            <GlassButton key={idx} className='bg-white/40 btn-text-regular' buttonClassName='!px-4 !h-8 !min-w-0 '>{btn.name}</GlassButton>
          ))}
        </div>

        <BaseCard className='w-full p-4 flex flex-col mt-2 gap-0'>
          <CardBody className='flex flex-col items-center justify-center gap-3'>
            <p className='heading-medium-regular text-white mt-4'>Upload Documents</p>
            <p className='text-small-regular text-white'>Add new contracts, visa, or QID documents</p>
          </CardBody>
          <CardFooter className='mt-5 mb-2'>
            <GlassButton className="w-full" buttonClassName='shadow-figma-drop' size="large">Upload New Document</GlassButton>
          </CardFooter>
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

      </section>
    </DashboardLayout>
  )
}

export default CommercialFileManagement