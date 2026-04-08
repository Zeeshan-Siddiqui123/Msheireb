import GlassCard from "../../common/GlassCard";
import GlassButton from "../../common/GlassButton";

type ProfileVariant = "residential" | "employee";

export interface ProfileCardProps {
  variant?: ProfileVariant;

  name: string;
  avatarUrl?: string;

  // shared
  validUntil?: string;

  // residential
  leasingType?: string;
  nationality?: string;
  familyMembers?: number;
  buildingRef?: string;

  // employee
  company?: string;
  buildingStatus?: string;
  qrCodeUrl?: string;

  onActionClick?: () => void;
}

export default function ProfileCard({
  variant = "residential",
  name,
  avatarUrl = "https://i.pravatar.cc/12",
  validUntil,

  leasingType,
  nationality,
  familyMembers,
  buildingRef,

  company,
  buildingStatus,
  qrCodeUrl,

  onActionClick
}: ProfileCardProps) {

  console.log(variant);
  return (
    <GlassCard className="text-white h-fit">
      {/* Banner */}
      <div className="h-24 w-full bg-[url('/src/assets/profile_bg.webp')] bg-no-repeat bg-contain opacity-80" />

      <div className="px-3 pb-6">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden">
              <img src={avatarUrl} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-heading-primary">{name}</h2>
          </div>

          {/* QR Code (only employee) */}
          {variant === "employee" && qrCodeUrl && (
            <img src={qrCodeUrl} className="w-14 h-14" />
          )}
        </div>

        {/* ========================= */}
        {/* RESIDENTIAL UI */}
        {/* ========================= */}
        {variant === "residential" && (
          <>
            <div className="grid grid-cols-3 gap-4 w-full mb-6 p-0 mx-0">
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
            <div className="flex justify-center">
              <GlassButton
                buttonClassName="shadow-figma-drop rounded-full"
                onClick={onActionClick}
              >
                Edit Profile
              </GlassButton>
            </div>
          </>
        )}

        {/* ========================= */}
        {/* EMPLOYEE UI */}
        {/* ========================= */}
        {variant === "employee" && (
          <>
            <div className="grid grid-cols-3 gap-4  mb-4">
              <div>
                <p className="text-small-regular">Company</p>
                <p className="label-bold-center">{company}</p>
              </div>
              <div>
                <p className="text-small-regular">Valid until</p>
                <p className="label-bold-center">{validUntil}</p>
              </div>
              <div>
                <p className="text-small-regular">Building Ref.</p>
                <p className="label-bold-center">{buildingStatus}</p>
              </div>
            </div>

            <p className="text-small-regular  mb-4">
              Commercial Employee Identification Card
            </p>

            <div className="flex justify-center">
              <GlassButton
                buttonClassName="rounded-full px-6"
                onClick={onActionClick}
              >
                View ID Card
              </GlassButton>
            </div>
          </>
        )}
      </div>
    </GlassCard>
  );
}
