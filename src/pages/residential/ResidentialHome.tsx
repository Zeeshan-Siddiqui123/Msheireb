import ProfileCard from '../../components/portals/residential/ProfileCard'
import StatCard from '../../components/portals/residential/StatCard'
import DiscoverCard from '../../components/portals/residential/DiscoverCard'
import QuickActions from '../../components/portals/residential/QuickActions'
import DashboardLayout from '../../components/common/DashboardLayout'

// Custom SVG Icons
import tempIcon from '../../assets/svg/temp-icon.svg'
import energyIcon from '../../assets/svg/energy-icon.svg'
import stepsIcon from '../../assets/svg/steps-icon.svg'
import awardIcon from '../../assets/svg/award-icon.svg'

import { Airplay, Lock, Lightbulb, Settings2 } from 'lucide-react'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import { RightSidebarContent } from '../../components/common/RightSidebarContent'

export default function ResidentialHome() {
  const bgImg1 = '/src/assets/discover_1.jpg';
  const bgImg2 = '/src/assets/discover_2.jpg';
  const bgImg3 = '/src/assets/discover_3.jpg';
  const bgImg4 = '/src/assets/discover_4.jpg';
  const bgImg5 = '/src/assets/discover_5.jpg';
  const bgImg6 = '/src/assets/discover_6.jpg';

 

  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent/>} rightSidebar={<RightSidebarContent/>}>
      <section>
        <h2 className="heading-medium-bold mb-4 ">My Home</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Temperature"
            value="24°C"
            icon={<img src={tempIcon} alt="temp" className="h-full w-auto" />}
          />
          <StatCard
            title="Energy Usage"
            value="127 kWh"
            icon={<img src={energyIcon} alt="energy" className="h-full w-auto" />}
          />
          <StatCard
            title="Steps Today"
            value="8,547"
            icon={<img src={stepsIcon} alt="steps" className="h-full w-auto opacity-80" />}
          />
          <StatCard
            title="Reward Points"
            value="2,450"
            icon={<img src={awardIcon} alt="award" className="h-full w-auto" />}
          />
        </div>
      </section>

      <section>
        <h2 className="heading-medium-bold mb-4 ">Discover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <DiscoverCard title="Apartment Details" bgUrl={bgImg1} href="/appartment-details" />
          <DiscoverCard title="Payments and Invoices" bgUrl={bgImg2} href="/payments" />
          <DiscoverCard title="Facility Booking" bgUrl={bgImg3} href='/facility-booking'/>
          <DiscoverCard title="Visitor Management" bgUrl={bgImg4} href='/visitor'/>
          <DiscoverCard title="Home Services" bgUrl={bgImg5} href='/home-services' />
          <DiscoverCard title="Offers and Promotions" bgUrl={bgImg6} />
        </div>
      </section>
    </DashboardLayout>
  )
}
