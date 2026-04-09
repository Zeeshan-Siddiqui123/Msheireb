// import ProfileCard from '../../components/portals/residential/ProfileCard'
import StatCard from '../../components/portals/residential/StatCard'
import DiscoverCard from '../../components/portals/residential/DiscoverCard'
// import QuickActions from '../../components/portals/residential/QuickActions'
import DashboardLayout from '../../components/common/DashboardLayout'

// Custom SVG Icons
import tempIcon from '../../assets/svg/temperature.svg'
import energyIcon from '../../assets/svg/energy-icon.svg'
import stepsIcon from '../../assets/svg/steps-icon.svg'
import awardIcon from '../../assets/svg/award-icon.svg'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import { RightSidebarContent } from '../../components/common/RightSidebarContent'
import { routes } from '../../routes'

export default function ResidentialHome() {
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} rightSidebar={<RightSidebarContent />}>
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
          {routes.residential.map((route, index) => route.bgimg && (
            <DiscoverCard key={index} bgUrl={route.bgimg} title={route.title} href={route.path} />
          ))}
        </div>      </section>
    </DashboardLayout>
  )
}
