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


// function MoreExamples() {
//   return (
//     <div className="">
//       <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-[36px] bg-[#ffffff1a] px-8 py-12 shadow-[0px_25px_50px_-12px_#00000040] relative backdrop-blur-md">
//         <div className="flex h-0.5 flex-none items-start bg-[#ffffff99] absolute left-[36px] right-[36px] top-0" />
//         <div className="flex h-0.5 flex-none items-start bg-[#ffffff99] absolute bottom-0 left-[36px] right-[36px]" />
//         <div className="flex w-0.5 items-start bg-[#ffffff99] absolute bottom-[36px] left-0 top-[36px]" />
//         <div className="flex w-0.5 items-start bg-[#ffffff99] absolute bottom-[36px] right-0 top-[36px]" />
//         <div className="flex h-9 w-9 flex-none items-start rounded-tl-[36px] border-t-2 border-l-2 border-solid border-[#ffffff99] absolute left-0 top-0" />
//         <div className="flex h-9 w-9 flex-none items-start rounded-br-[36px] border-r-2 border-b-2 border-solid border-[#ffffff99] absolute bottom-0 right-0" />
      
       
        
//       </div>
//     </div>
//   );
// }
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
    <>
      {/* <MoreExamples/> */}
      <GlassCard className="text-white">
        {/* Banner Image */}
        <div className="h-24 w-full bg-[url('/src/assets/profile_bg.webp')] bg-no-repeat bg-contain rounded-xl opacity-80 "></div>

        {/* Profile Info */}
        <div className="px-6 pb-4 relative flex flex-col items-center">
          {/* Avatar */}
          <div className="flex items-center gap-4 w-full mb-4">
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
              <p className="text-small-regular text-10">Leasing Type</p>
              <p className="label-bold-center">{leasingType}</p>
            </div>
            <div>
              <p className="text-small-regular text-10">Valid Until</p>
              <p className="label-bold-center">{validUntil}</p>
            </div>
            <div>
              <p className="text-small-regular text-10">Family Members</p>
              <p className="label-bold-center">{familyMembers}</p>
            </div>
            <div>
              <p className="text-small-regular text-10">Nationality</p>
              <p className="label-bold-center">{nationality}</p>
            </div>

            <div className="col-span-2">
              <p className="text-small-regular text-10">Building Ref.</p>
              <p className="label-bold-center">{buildingRef}</p>
            </div>
          </div>

          {/* Action Button */}
          <GlassButton
            buttonClassName="shadow-figma-drop rounded-full btn-text-regular"
            onClick={onEditProfile}
          >
            Edit Profile
          </GlassButton>
        </div>
      </GlassCard>
    </>

  );
}
