import GlassButton from "../../../common/GlassButton";
import { Download, ClipboardList } from "lucide-react";

const Lease = () => {
    const documents = [
        { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Move-in Checklist", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Parking Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Amenity Rules", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    ];

    return (
        <div className="flex flex-col gap-4 mt-4 w-full">
            {/* Lease Information Card */}
            <div className="w-full bg-white/10 rounded-[20px] p-6 border border-white/20 backdrop-blur-md shadow-lg text-left relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[17px] font-bold text-white">Lease Information</h2>
                </div>
                <hr className="border-white/30 mb-5" />

                <div className="flex flex-col gap-[18px]">
                    <div>
                        <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Lease Period</label>
                        <p className="font-bold text-white text-[15px]">Jan 15, 2024 - Jan 14, 2025</p>
                    </div>
                    <div>
                        <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Monthly Rent</label>
                        <p className="font-bold text-white text-[15px]">QAR 2,500</p>
                    </div>
                    <div>
                        <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Security Deposit</label>
                        <p className="font-bold text-white text-[15px]">QAR 5,000</p>
                    </div>
                    <div>
                        <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Days Remaining</label>
                        <p className="font-bold text-white text-[15px]">120 days</p>
                    </div>
                    
                    <div className="mt-2 flex border border-white/30 rounded-[14px] bg-white/5 items-center justify-center flex-col p-6 text-center shadow-inner">
                        <p className="text-[16px] font-bold text-white mb-2 tracking-wide">Lease Renewal Available</p>
                        <p className="text-[12px] text-white/90 mb-5 leading-relaxed">
                            Your lease renewal option is available. <br />
                            Contact management to discuss renewal terms.
                        </p>
                        <GlassButton className="px-10 py-2.5 h-auto text-[14px] font-medium w-full max-w-[320px] rounded-full">
                            Request Storage Renewal
                        </GlassButton>
                    </div>
                </div>
            </div>

            {/* Documents & Contracts Card */}
            <div className="w-full bg-white/10 rounded-[20px] p-6 border border-white/20 backdrop-blur-md shadow-lg text-left relative overflow-hidden mb-4">
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
                                    <p className="font-bold text-white text-[14px] leading-tight mb-1">{doc.name}</p>
                                    <span className="text-white/80 text-[11px] font-medium">{doc.meta}</span>
                                </div>
                            </div>
                            <button className="text-white hover:text-white/70 transition-colors p-2">
                                <Download size={20} strokeWidth={2} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lease;