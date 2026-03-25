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
      <div className="justify-between p-6 flex flex-col text-white transition">
        <div className="text-white">
          {icon}
        </div>
        <div>
          <p className="text-base  mb-1">{title}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    </CardOutlineWrapper>

  );
}
