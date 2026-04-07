import QuickActionsWrapper from "../../../../common/QuickActionsWrapper";
import CivilImage from '../../../../../assets/civil.png'
import ElectricalImage from '../../../../../assets/electrical.png'
import GarbageImage from '../../../../../assets/garbage.png'
import FireImage from '../../../../../assets/fire.png'
import GasImage from '../../../../../assets/gas.png'
import HousekeepingImage from '../../../../../assets/housekeeping.png'
import AcImage from '../../../../../assets/ac.png'
import LandscapeImage from '../../../../../assets/landscape.png'
import HealthImage from '../../../../../assets/health.png'
import PlumbingImage from '../../../../../assets/plumbing.png'

const services = [
  { title: "Civil", img: CivilImage },
  { title: "Electrical", img: ElectricalImage },
  { title: "Garbage Disposal", img: GarbageImage },
  { title: "Fire & Life Safety", img: FireImage },
  { title: "Gas", img: GasImage },
  { title: "Housekeeping", img: HousekeepingImage },
  { title: "Air Conditioning", img: AcImage },
  { title: "Landscaping", img: LandscapeImage },
  { title: "Health, Safety & Security", img: HealthImage },
  { title: "Plumbing", img: PlumbingImage },
];

const MaintenanceServices = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">

      {services.map((item, index) => (
        <QuickActionsWrapper key={index} className="w-full !p-2" >
          <div
            onClick={() => onCategorySelect(item.title)}
            className="
            flex items-center gap-4             
            transition-all duration-300
            cursor-pointer
            flex-col md:flex-row lg:flex-row
            hover:scale-[1.02] active:scale-95
          "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <p className="body-regular ">
              {item.title}
            </p>
          </div>
        </QuickActionsWrapper>
      ))}
    </div>
  );
};

export default MaintenanceServices;