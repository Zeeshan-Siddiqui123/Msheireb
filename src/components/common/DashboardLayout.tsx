import type { ReactNode } from 'react';
import Navigation from './Navigation';
import BG from '../../assets/BG.png';

export interface DashboardLayoutProps {
  leftSidebar: ReactNode;
  children: ReactNode;
  rightSidebar: ReactNode;
}

export default function DashboardLayout({ leftSidebar, children, rightSidebar }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen text-white pb-12 overflow-x-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navigation />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col pt-8">
            {leftSidebar}
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {children}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col">
            {rightSidebar}
          </div>

        </div>
      </main>
    </div>
  );
}
