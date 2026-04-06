import { useNavigate } from "react-router-dom";
import GlassButton from "../../common/GlassButton";

export interface DiscoverCardProps {
  title: string;
  bgUrl: string;
  href?: string;
}

export default function DiscoverCard({ title, bgUrl, href }: DiscoverCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col justify-end p-4 rounded-[8px] overflow-hidden shadow-xl group h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h3 className="label-small-semibold mb-3">{title}</h3>
        <GlassButton
          className="bg-black/70  w-full shadow-[inset_0_-25px_15px_rgba(255,255,255,0.2),inset_0_-2px_6px_rgba(0,0,0,0.5)]"
          size="small"
          onClick={() => {
            if (href) {
              navigate(href);
            }
          }}
        >
          Explore
        </GlassButton>
      </div>
    </div>
  );
}
