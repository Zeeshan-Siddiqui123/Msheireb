import StatusChip from "../../../../common/ui/Chip";
import BaseCard, { CardBody } from "../../../../common/ui/BaseCard";

const CarLogs = () => {
  const vehicles = [
    {
      id: 1,
      model: "2023 Tesla Model 3",
      details: "Dec 14, 2026 - 8:30 • AMP-A-145",
      status: "exit",
    },
    {
      id: 2,
      model: "2023 Tesla Model 3",
      details: "Dec 14, 2026 - 8:30 • AMP-A-145",
      status: "entry",
    },
    {
      id: 3,
      model: "2023 Tesla Model 3",
      details: "Dec 14, 2026 - 8:30 • AMP-A-145",
      status: "exit",
    },
    {
      id: 4,
      model: "2023 Tesla Model 3",
      details: "Dec 14, 2026 - 8:30 • AMP-A-145",
      status: "entry",
    }
  ];

  return (
    <div className="flex flex-col gap-4 mt-4 w-full">
      {vehicles.map((vehicle) => (
        <BaseCard key={vehicle.id} className="w-full  rounded-lg  relative overflow-hidden transition-all duration-300 hover:bg-white/15">
          <CardBody className="flex justify-between items-start w-full">
            <div className="flex gap-4 items-center">
              <div className="text-black rounded-lg flex items-center justify-center">
                <img src="/src/assets/svg/car-svg.svg" alt="" className="w-12 h-12 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-small-semibold mb-0.5">{vehicle.model}</h3>
                <p className="text-small-regular">{vehicle.details}</p>
              </div>
            </div>
            <StatusChip status={vehicle.status} />
          </CardBody>
        </BaseCard>
      ))}
    </div>
  );
}

export default CarLogs;