import PageHeader from '../../components/portals/commercial/PageHeader';
import DashboardLayout from '../../components/common/DashboardLayout';
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent';
import { RightSidebarContent } from '../../components/common/RightSidebarContent';
import { useState } from 'react';
import BookingStepper from '../../components/common/BookingStepper';
import Step1ServiceSelection from '../../components/portals/commercial/FacilityBooking/Step1ServiceSelection';
import Step2PersonalInfo from '../../components/portals/commercial/FacilityBooking/Step2PersonalInfo';
import Step3Confirmation from '../../components/portals/commercial/FacilityBooking/Step3Confirmation';

const bookingSteps = [
  { key: "step-1" },
  { key: "step-2" },
  { key: "step-3" },
  { key: "step-4" },
];

const CommercialFacilityBooking = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, bookingSteps.length - 1));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
      <section className="flex flex-col h-full w-full py-2">
        <PageHeader
          title="Multipurpose Room for Daily Rental"
          backPath="/commercial"
          showTabs={false}
        />

        {/* Stepper */}
        <div className="px-2 mt-4 mb-6">
          <BookingStepper steps={bookingSteps} currentStep={currentStep} />
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto pb-6">
          {currentStep === 0 && (
            <Step1ServiceSelection onNext={goNext} onCancel={goBack} />
          )}
          {currentStep === 1 && (
            <Step2PersonalInfo onNext={goNext} onCancel={goBack} />
          )}
          {currentStep === 2 && (
            <Step3Confirmation onConfirm={goNext} onCancel={goBack} />
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default CommercialFacilityBooking;