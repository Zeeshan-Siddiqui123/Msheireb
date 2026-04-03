import QuickActionsWrapper from "../../../common/QuickActionsWrapper";

const services = [
  { title: "Civil", img: "src/assets/civil.png" },
  { title: "Electrical", img: "src/assets/electrical.png" },
  { title: "Garbage Disposal", img: "src/assets/garbage.png" },
  { title: "Fire & Life Safety", img: "src/assets/fire.png" },
  { title: "Gas", img: "src/assets/gas.png" },
  { title: "Housekeeping", img: "src/assets/housekeeping.png" },
  { title: "Air Conditioning", img: "src/assets/ac.png" },
  { title: "Landscaping", img: "src/assets/landscape.png" },
  { title: "Health, Safety & Security", img: "src/assets/health.png" },
  { title: "Plumbing", img: "src/assets/plumbing.png" },
];

const MaintenanceServices = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      
      {services.map((item, index) => (
        <QuickActionsWrapper className="w-full" >
        <div
          key={index}
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

          <p className="text-white text-center lg:text-start text-sm md:text-base font-medium">
            {item.title}
          </p>
        </div>
        </QuickActionsWrapper>
      ))}
    </div>
  );
};

export default MaintenanceServices;