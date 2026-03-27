import GlassButton from "../../../common/GlassButton";
import QuickActionsWrapper from "../../../common/QuickActionsWrapper";
import MaintenanceServices from "./MaintenanceServices";

interface MaintenanceProps {
    showServices: boolean;
    setShowServices: (value: boolean) => void;
}

const Maintenance = ({ showServices, setShowServices }: MaintenanceProps) => {

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

            
            {showServices && <MaintenanceServices />}

        </QuickActionsWrapper>
    );
};

export default Maintenance;