import QuickActionsWrapper from "../../../../common/QuickActionsWrapper";

const services = [
  { title: "Civil", img: "/src/assets/civil.png" },
  { title: "Electrical", img: "/src/assets/electrical.png" },
  { title: "Garbage Disposal", img: "/src/assets/garbage.webp" },
  { title: "Fire & Life Safety", img: "/src/assets/fire.webp" },
  { title: "Gas", img: "/src/assets/gas.webp" },
  { title: "Housekeeping", img: "/src/assets/housekeeping.webp" },
  { title: "Air Conditioning", img: "/src/assets/ac.webp" },
  { title: "Landscaping", img: "/src/assets/landscape.webp" },
  { title: "Health, Safety & Security", img: "/src/assets/health.webp" },
  { title: "Plumbing", img: "/src/assets/plumbing.webp" },
];

const MaintenanceServices = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      
      {services.map((item, index) => (
        <QuickActionsWrapper className="w-full !p-2" >
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
            className="w-20 h-20 object-cover rounded-lg"
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