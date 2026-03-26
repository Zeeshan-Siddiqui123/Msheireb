import type { ReactNode } from "react";
import CardOutlineWrapper from "../../common/CardOutlineWrapper";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <CardOutlineWrapper className="bg-white/10 hover:bg-white/15 transition">
      <div className="justify-between flex  gap-6  flex flex-col text-white transition">
        <div className="text-white">
          {icon}
        </div>
        <div>
          <p className="body-regular  mb-1">{title}</p>
          <p className="heading-medium-bold">{value}</p>
        </div>
      </div>
    </CardOutlineWrapper>

  );
}
