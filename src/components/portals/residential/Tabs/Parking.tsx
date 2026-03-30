import GlassButton from "../../../common/GlassButton";
import { CarFront, CircleParking } from "lucide-react";

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
        <div key={vehicle.id} className="w-full  rounded-[14px] p-5 border border-white/20 backdrop-blur-md shadow-lg text-left relative overflow-hidden transition-all duration-300 hover:bg-white/15">
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
              <div className="bg-[#e0eefa] text-black p-3 rounded-[12px] shadow-sm flex items-center justify-center">
                <CarFront size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-small-semibold mb-0.5">{vehicle.model}</h3>
                <p className="text-small-regular">{vehicle.details}</p>
              </div>
            </div>
            <span className="text-inter-xs bg-white text-gray-800 px-3 py-1 mt-1 rounded-full  tracking-wider backdrop-blur-md shadow-sm">
              {vehicle.status}
            </span>
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
        </div>
      ))}
      
      {onRegister && (
        <div className="mt-4 flex justify-center w-full">
          <GlassButton 
            onClick={onRegister} 
            className="px-10 py-2 h-auto text-[15px] font-medium w-full max-w-[400px] rounded-full"
          >
            + Register New Vehicle
          </GlassButton>
        </div>
      )}
    </div>
  );
}

export default Parking;