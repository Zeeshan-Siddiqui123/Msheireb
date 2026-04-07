import React from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import DiscoverCard from '../../components/portals/residential/DiscoverCard'

export const EmplyeeHome = () => {
  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />} >


      <section>
        <h2 className="heading-medium-bold mb-4 ">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
        </div>
      </section>
    </DashboardLayout>
  )
}
