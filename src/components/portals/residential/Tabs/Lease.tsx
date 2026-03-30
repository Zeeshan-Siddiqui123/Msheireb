import { useDisclosure } from "@heroui/react";
import LeaseRenewalModal from "../Modals/LeaseRenewalModal";
import GlassButton from "../../../common/GlassButton";
import { Download, ClipboardList } from "lucide-react";
import QuickActionsWrapper from "../../../common/QuickActionsWrapper";

const Lease = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const documents = [
        { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Move-in Checklist", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Parking Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Amenity Rules", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    ];

    const handleRequestRenewal = () => {
        console.log("Requesting renewal...");
        onClose();
    };

    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            {/* Lease Information Card */}
            <div className="w-full  rounded-[20px] p-6 border border-white/20 backdrop-blur-md shadow-lg text-left relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="heading-medium-bold">Lease Information</h2>
                </div>
                <hr className="border-white/30 mb-5" />

                <div className="flex flex-col gap-[18px]">
                    <div>
                        <label className="text-small-medium mb-2">Lease Period</label>
                        <p className="text-regular-bold">Jan 15, 2024 - Jan 14, 2025</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Monthly Rent</label>
                        <p className="text-regular-bold">QAR 2,500</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Security Deposit</label>
                        <p className="text-regular-bold">QAR 5,000</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Days Remaining</label>
                        <p className="text-regular-bold">120 days</p>
                    </div>
                    
                    <div className="mt-2 flex border border-white/30 rounded-[14px]  items-center justify-center flex-col p-6 text-center shadow-inner">
                        <p className="heading-medium-bold mb-2">Lease Renewal Available</p>
                        <p className="text-small-medium mb-5">
                            Your lease renewal option is available. <br />
                            Contact management to discuss renewal terms.
                        </p>
                        <GlassButton 
                            onClick={onOpen}
                            className="px-10 py-2.5 h-auto text-[14px] font-medium w-full rounded-full"
                        >
                            Request Storage Renewal
                        </GlassButton>
                    </div>
                </div>
            {/* </QuickActionsWrapper> */}

            {/* Documents & Contracts Card */}
            <QuickActionsWrapper className="w-full backdrop-blur-md shadow-lg text-left relative overflow-hidden mb-4">
                <h2 className="text-[17px] font-bold text-white mb-4">Documents & Contracts</h2>
                <hr className="border-white/30 mb-5" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {documents.map((doc, idx) => (
                        <div key={idx} className="flex relative items-center justify-between p-4 border border-white/30 rounded-[12px] bg-white/[0.08] hover:bg-white/[0.12] transition-colors cursor-pointer group shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#e0eefa] text-black p-2.5 rounded-[10px] shadow-sm">
                                    <ClipboardList size={20} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col w-36">
                                    <p className="text-regular-bold mb-1">{doc.name}</p>
                                    <span className="text-small-medium">{doc.meta}</span>
                                </div>
                            </div>
                            <button className="text-white hover:text-white/70 transition-colors p-2">
                                <Download size={20} strokeWidth={2} />
                            </button>
                        </div>
                    ))}
                </div>
            </QuickActionsWrapper>

            {/* Modal */}
            <LeaseRenewalModal
                isOpen={isOpen}
                onClose={onClose}
                expiryDate="Jan 14, 2025"
                daysRemaining={120}
                onRequestRenewal={handleRequestRenewal}
            />
        </div>
        </div>
    );
}

export default Lease;