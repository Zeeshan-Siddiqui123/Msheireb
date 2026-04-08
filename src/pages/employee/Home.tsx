import React from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import DiscoverCard from '../../components/portals/residential/DiscoverCard'
import { routes } from '../../routes'

export const EmployeeHome = () => {
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} >


      <section>
        <h2 className="heading-medium-bold mb-4 ">Discover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {routes.employee.map((route, index) => route.bgimg && (
            <DiscoverCard key={index} bgUrl={route.bgimg} title={route.title} href={route.path} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}
