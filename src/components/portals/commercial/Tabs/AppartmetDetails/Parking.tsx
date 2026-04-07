import GlassButton from "../../../../common/GlassButton";
import { CarFront, CircleParking } from "lucide-react";
import QuickActionsWrapper from "../../../../common/QuickActionsWrapper";
import StatusChip from "../../../../common/Chip";

export interface ParkingProps {
  onRegister?: () => void;
}

const Parking = ({ onRegister }: ParkingProps) => {
  const vehicles = [
    {
      id: 1,
      model: "2023 Tesla Model 3",
      details: "White • ABC-1234",
      status: "Parked",
      spot: "P-A-145",
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      model: "2023 Tesla Model 3",
      details: "White • ABC-1234",
      status: "Parked",
      spot: "P-A-145",
      lastActivity: "23 hours ago"
    }
  ];

  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      {vehicles.map((vehicle) => (
        <QuickActionsWrapper key={vehicle.id} className="w-full  rounded-lg  relative overflow-hidden transition-all duration-300 hover:bg-white/15">
          <div className="flex justify-between items-start w-full">
            <div className="flex gap-4 items-center">
              <div className=" text-black  shadow-sm flex items-center justify-center">
                <img src="/src/assets/svg/car-svg.svg" alt="Car" className='' />
              </div>
              <div className="flex flex-col">
                <h3 className="text-small-semibold mb-0.5">{vehicle.model}</h3>
                <p className="text-small-regular">{vehicle.details}</p>
              </div>
            </div>
            {/* <span className="text-inter-xs bg-white text-gray-800 px-3 py-1 mt-1 rounded-full  tracking-wider backdrop-blur-md shadow-sm">
              {vehicle.status}
            </span> */}
            <StatusChip status={vehicle.status} />
          </div>

          <div className="flex justify-between items-center mt-6 pr-4">
            <div className="flex items-center gap-2 text-small-regular">
              <CircleParking className="text-white" size={18} strokeWidth={2} />
              <span className="">Parking Spot</span>
              <span className=" ml-2">{vehicle.spot}</span>
            </div>
            <div className="flex items-center gap-2 text-small-regular">
              <span className="">Last Activity</span>
              <span className=" ml-2">{vehicle.lastActivity}</span>
            </div>
          </div>
        </QuickActionsWrapper>
      ))}

      {onRegister && (
        <div className="mt-4 flex justify-center w-full">
          <GlassButton
            onClick={onRegister}
            className="w-1/2"
            size="large"
            buttonClassName="shadow-figma-drop w-full"
          >
            + Register New Vehicle
          </GlassButton>
        </div>
      )}
    </div>
  );
}

export default Parking;