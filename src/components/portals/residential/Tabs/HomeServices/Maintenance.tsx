import GlassButton from "../../../../common/GlassButton";
import QuickActionsWrapper from "../../../../common/QuickActionsWrapper";
import MaintenanceServices from "./MaintenanceServices";
import MaintenanceRequestForm from "./MaintenanceRequestForm";

interface MaintenanceProps {
    showServices: boolean;
    setShowServices: (value: boolean) => void;
    showForm: boolean;
    setShowForm: (value: boolean) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
}

const Maintenance = ({ 
    showServices, 
    setShowServices, 
    showForm, 
    setShowForm, 
    selectedCategory, 
    setSelectedCategory 
}: MaintenanceProps) => {

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setShowForm(true);
    };

    return (
        <QuickActionsWrapper 
            hideBorder={showServices}
            className="flex items-center justify-center flex-col gap-6 p-6"
        >

            
            {!showServices && (
                <div className="flex items-center justify-center flex-col gap-4">
                    {/* The heading and para are now in the parent HomeServices.tsx */}
                    <GlassButton
                        className="py-2 px-6 rounded-full"
                        onClick={() => setShowServices(true)}
                    >
                        + Create New Request
                    </GlassButton>
                </div>
            )}

            
            {showServices && !showForm && (
                <MaintenanceServices onCategorySelect={handleCategorySelect} />
            )}

            {showForm && (
                <MaintenanceRequestForm category={selectedCategory}  />
            )}

        </QuickActionsWrapper>
    );
};

export default Maintenance;