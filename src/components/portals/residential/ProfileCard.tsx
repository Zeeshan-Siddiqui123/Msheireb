import GlassCard from "../../common/GlassCard";
import GlassButton from "../../common/GlassButton";

export interface ProfileCardProps {
  name: string;
  avatarUrl?: string;
  leasingType: string;
  validUntil: string;
  nationality: string;
  familyMembers: number;
  buildingRef: string;
  onEditProfile?: () => void;
}

export default function ProfileCard({
  name,
  avatarUrl = "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  leasingType,
  validUntil,
  nationality,
  familyMembers,
  buildingRef,
  onEditProfile
}: ProfileCardProps) {
  return (
    <GlassCard className="text-white h-fit">
      {/* Banner Image */}
      <div className="h-24 w-full bg-[url('/src/assets/profile_bg.png')] bg-no-repeat  bg-center opacity-80 "></div>

      {/* Profile Info */}
      <div className="px-6 pb-6 relative flex flex-col items-center">
        {/* Avatar */}
        <div className="flex items-center gap-4 w-full mt-4 mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden bg-gray-800 shrink-0">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="">
            <h2 className="text-heading-primary">{name}</h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 w-full mb-6">
          <div>
            <p className="label-small-regular">Leasing Type</p>
            <p className="label-bold-center">{leasingType}</p>
          </div>
          <div>
            <p className="label-small-regular">Valid Until</p>
            <p className="label-bold-center">{validUntil}</p>
          </div>
          <div>
            <p className="label-small-regular">Family Members</p>
            <p className="label-bold-center">{familyMembers}</p>
          </div>
          <div>
            <p className="label-small-regular">Nationality</p>
            <p className="label-bold-center">{nationality}</p>
          </div>

          <div className="col-span-2">
            <p className="label-small-regular">Building Ref.</p>
            <p className="label-bold-center">{buildingRef}</p>
          </div>
        </div>

        {/* Action Button */}
        <GlassButton
          className="w-full rounded-full"
          onClick={onEditProfile}
        >
          Edit Profile
        </GlassButton>
      </div>
    </GlassCard>
  );
}
