import { Airplay, Lightbulb, Lock, Settings2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/common/DashboardLayout';
import ProfileCard from '../../components/portals/residential/ProfileCard';
import QuickActions from '../../components/portals/residential/QuickActions';
// import GlassCard from '../../components/common/GlassCard';
import DiscoverCard from '../../components/portals/residential/DiscoverCard';
import { Button } from '@heroui/react';
import QuickActionsWrapper from '../../components/common/QuickActionsWrapper';

export default function CarWashDetail() {
  const navigate = useNavigate();

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
      <section className="flex flex-col h-full w-full max-w-3xl mx-auto px-4 py-2 text-white">
        {/* Header Area */}
        <div className="relative flex items-center justify-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-white hover:text-white/80  cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <h1 className="text-xl font-bold tracking-wide">Car Wash</h1>
        </div>

        {/* Hero Image */}
        <div className="w-full h-56 rounded-[16px] overflow-hidden mb-8 shadow-2xl">
          <img
            src="/src/assets/services_car.webp"
            alt="Car Wash"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Details Section */}
        <QuickActionsWrapper className="p-4 mb-8">
          <h2 className="heading-medium-bold mb-4">Contact Details</h2>
          <hr className="border-white z-50 mb-4" />

          <div className="space-y-4 text-sm text-white/90">
            <div className=''>
              <p className=" text-small-regular mb-1">Description</p>
              <p className='body-regular'>A convenient car washing service provided in your MDD Car Park, using eco-friendly techniques and high-quality products.</p>
            </div>

            <div>
              <p className="text-small-regular mb-1">Our car wash service includes:</p>
              <p className='body-regular'>Exterior & Interior cleaning | Tyre Waxing | Polishing</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-small-regular mb-1">Service Delivery</p>
                <p className='body-regular'>Morning</p>
                <p className='body-regular'>Delivery on 15 September 2025</p>
              </div>
              <div>
                <p className="text-small-regular mb-1">Details</p>
                <p>Exterior Body Wash (Sedan) (*1) - 20 QAR</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2">
              <div>
                <p className="text-small-regular mb-1">My Information</p>
                <p>svarghese@msheireb.com</p>
              </div>
              <div>
                <p className="text-small-regular mb-1">My Online Payment</p>
                <p>Transaction ID:</p>
                <p>Date: 08 January 2026</p>
                <p>Amount: 20 QAR</p>
              </div>
            </div>
          </div>
        </QuickActionsWrapper>

        {/* Related Services Section */}
        <div className="mb-8">
          <h2 className="heading-medium-semibold mb-4">Related Services</h2>
          <div className="w-56">
            <DiscoverCard
              title="Access Cards - Car Park"
              bgUrl="/src/assets/services_5.webp"
            />
          </div>
        </div>

        {/* Payment Section */}
        <QuickActionsWrapper className="p-4 mb-8 ">
          <div className='w-full backdrop-blur-[35px]'>
            <div className="flex items-center justify-between p-3 rounded-lg  hover:bg-white/10 ">
              <div className="flex items-center gap-3">
                <div className=" rounded-md">
                  <img src="/src/assets/svg/socials/apple.svg" alt="Apple pay" />
                </div>
                <div className="flex flex-col">
                  <p className="body-regular">Apple Pay</p>
                  <p className="text-small-regular">Tap and pay quickly with Apple Pay</p>
                </div>
              </div>
              <div className="relative flex items-center">
                <input type="radio" name="payment" id="payment-apple" className="peer hidden" defaultChecked />
                <label
                  htmlFor="payment-apple"
                  className="w-5 h-5 rounded-full border-2 border-white/30 peer-checked:border-white flex items-center justify-center cursor-pointer transition-all"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                </label>
              </div>
            </div>
            <hr className="border-white border-dashed " />

            <div className="flex items-center justify-between p-3 rounded-[12px] bg-white/5 hover:bg-white/10 ">
              <div className="flex items-center gap-3">
                <div className="rounded-md">
                  <img src="/src/assets/svg/socials/mastercard.svg" alt="Apple pay" />
                </div>
                <div className="flex flex-col">
                  <p className="body-regular">Credit or Debit Card</p>
                  <p className="text-small-regular">Connect your card for fast & secure</p>
                </div>
              </div>
              <Button className="rounded-full bg-transparent text-white border border-white text-sm ">Add</Button>
            </div>
            <hr className="border-white border-dashed " />

            <div className="flex items-center justify-between p-3 rounded-[12px] bg-white/5 hover:bg-white/10 ">
              <div className="flex items-center gap-3">
                <div className="rounded-md">
                  <img src="/src/assets/svg/socials/gpay.svg" alt="Apple pay" />
                </div>
                <div className="flex flex-col">
                  <p className="body-regular">Google Pay</p>
                  <p className="text-small-regular">Pay in cash when your order arrives</p>
                </div>
              </div>
              <div className="relative flex items-center">
                <input type="radio" name="payment" id="payment-gpay" className="peer hidden" />
                <label
                  htmlFor="payment-gpay"
                  className="w-5 h-5 rounded-full border-2 border-white/30 peer-checked:border-white flex items-center justify-center cursor-pointer transition-all"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                </label>
              </div>
            </div>

          </div>
        </QuickActionsWrapper>
      </section>
    </DashboardLayout>
  );
}
