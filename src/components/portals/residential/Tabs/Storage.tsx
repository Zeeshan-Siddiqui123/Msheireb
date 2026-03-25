import { 
  Download, 
  ClipboardList, 
  Info, 
  ShieldCheck, 
  Box, 
} from "lucide-react";

const Storage = () => {
    const documents = [
        { name: "Lease Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Move-in Checklist", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Parking Agreement", meta: "PDF • 2.4 MB • Jan 15, 2026" },
        { name: "Amenity Rules", meta: "PDF • 2.4 MB • Jan 15, 2026" },
    ];

    const storedItems = [
        { name: "Holiday Decorations", qty: 3 },
        { name: "Sports Equipment", qty: 5 },
        { name: "Archive Boxes", qty: 8 },
        { name: "Furniture (Chairs)", qty: 4 },
    ];

    return (
        <div className="mt-4 w-full bg-white/10 rounded-[24px] p-6 border border-white/20 backdrop-blur-md shadow-lg text-left relative overflow-hidden">
            {/* Storage Unit Section */}
            <h2 className="text-[17px] font-bold text-white mb-4">Storage Unit</h2>
            <hr className="border-white/30 mb-5" />

            <div className="grid grid-cols-2 gap-y-6 mb-8">
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Location</label>
                    <p className="font-bold text-white text-[15px]">Building A</p>
                    <p className="text-white/70 text-[13px]">Basement Level 2 • Zone C</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Size</label>
                    <p className="font-bold text-white text-[15px]">8 sqm</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Assigned To</label>
                    <p className="font-bold text-white text-[15px]">Unit #305 - Sarah Johnson</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Access</label>
                    <p className="font-bold text-white text-[15px]">Card</p>
                </div>
            </div>

            {/* Access and Usage Section */}
            <h2 className="text-[17px] font-bold text-white mb-4">Access and Usage</h2>
            <hr className="border-white/30 mb-5" />

            <div className="grid grid-cols-2 gap-y-6 mb-6">
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Last Accessed</label>
                    <p className="font-bold text-white text-[15px]">2026-02-15, 3:45 PM</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Access Hours</label>
                    <p className="font-bold text-white text-[15px]">24/7</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Assigned To</label>
                    <p className="font-bold text-white text-[15px]">Unit #305 - Sarah Johnson</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Access</label>
                    <p className="font-bold text-white text-[15px]">Card</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
                <div className="flex gap-4 items-center p-4 bg-sky-100/90 rounded-[12px] border border-sky-200/50 backdrop-blur-md">
                    <div className="text-sky-600">
                        <Info size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-sky-900 text-[13px]">Access Instructions</p>
                        <p className="text-sky-800 text-[12px]">Swipe access card at main entrance, then use elevator to B2</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center p-4 bg-emerald-50/90 rounded-[12px] border border-emerald-100/50 backdrop-blur-md">
                    <div className="text-emerald-500">
                        <ShieldCheck size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-emerald-900 text-[13px]">Security</p>
                        <p className="text-emerald-800 text-[12px]">CCTV monitored, Motion sensors active</p>
                    </div>
                </div>
            </div>

            {/* Allocation Details Section */}
            <h2 className="text-[17px] font-bold text-white mb-4">Allocation Details</h2>
            <hr className="border-white/30 mb-5" />

            <div className="grid grid-cols-2 gap-y-6 mb-8">
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Start Date</label>
                    <p className="font-bold text-white text-[15px]">2025-06-01</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">End Date</label>
                    <p className="font-bold text-white text-[15px]">2026-06-01</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Monthly Fee</label>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[11px] font-bold text-white/70 uppercase">Qar</span>
                        <p className="font-bold text-white text-[15px]">120</p>
                    </div>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Deposit</label>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[11px] font-bold text-white/70 uppercase">Qar</span>
                        <p className="font-bold text-white text-[15px]">240</p>
                    </div>
                </div>
            </div>

            {/* Stored Items Section */}
            <h2 className="text-[17px] font-bold text-white mb-4">Stored Items</h2>
            <hr className="border-white/30 mb-5" />

            <div className="flex flex-col gap-3 mb-8">
                {storedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-white rounded-[12px] bg-white/5 hover:bg-white/10 transition-colors cursor-default shadow-sm group">
                        <div className="flex items-center gap-3">
                            <Box size={18} className="text-white/70 group-hover:text-white transition-colors" />
                            <p className="font-bold text-white text-[14px]">{item.name}</p>
                        </div>
                        <div className="flex items-center gap-1.5  px-3 py-1">
                            <span className="text-[11px] text-white/70 font-semibold uppercase tracking-wider">Qty:</span>
                            <span className="text-[13px] font-bold text-white">{item.qty}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Documents & Contracts Section */}
            <h2 className="text-[17px] font-bold text-white mb-4">Documents and Contracts</h2>
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
    );
}

export default Storage;
