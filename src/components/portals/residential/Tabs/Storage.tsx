import {
    Download,
    ClipboardList,
    Info,
    ShieldCheck,
    Box,
} from "lucide-react";
import QuickActionsWrapper from "../../../common/QuickActionsWrapper";

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

    const storageUnitData = [
        { label: "Location", value: "Building A", subValue: "Basement Level 2 • Zone C" },
        { label: "Size", value: "8 sqm" },
        { label: "Assigned To", value: "Unit #305 - Sarah Johnson" },
        { label: "Access", value: "Card" },
    ];

    const accessUsageData = [
        { label: "Last Accessed", value: "2026-02-15, 3:45 PM" },
        { label: "Access Hours", value: "24/7" },
        { label: "Assigned To", value: "Unit #305 - Sarah Johnson" },
        { label: "Access", value: "Card" },
    ];

    const allocationDetailsData = [
        { label: "Start Date", value: "2025-06-01" },
        { label: "End Date", value: "2026-06-01" },
        { label: "Monthly Fee", value: "120", currency: "Qar" },
        { label: "Deposit", value: "240", currency: "Qar" },
    ];

    return (
        <QuickActionsWrapper className=" w-full p-4  relative overflow-hidden">
            <div className="w-full">
                {/* Storage Unit Section */}
                <h2 className="heading-medium-semibold mb-4">Storage Unit</h2>
                <hr className="border-white/30 mb-5" />

                <div className="grid grid-cols-2 gap-y-6 mb-8">
                    {storageUnitData.map((item, idx) => (
                        <div key={idx}>
                            <label className="text-small-regular mb-[2px] block">{item.label}</label>
                            <p className="body-regular">{item.value}</p>
                            {item.subValue && <p className="body-regular">{item.subValue}</p>}
                        </div>
                    ))}
                </div>

                {/* Access and Usage Section */}
                <h2 className="heading-medium-semibold mb-4">Access and Usage</h2>
                <hr className="border-white/30 mb-5" />

                <div className="grid grid-cols-2 gap-y-6 mb-6">
                    {accessUsageData.map((item, idx) => (
                        <div key={idx}>
                            <label className="text-small-regular mb-[2px] block">{item.label}</label>
                            <p className="body-regular">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3 mb-8">
                    <div className="flex gap-4 items-center p-4 bg-sky-100/90 rounded-[12px] border border-sky-200/50 backdrop-blur-md">
                        <div className="text-sky-600">
                            <Info size={20} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-small-bold text-brand-blue-main">Access Instructions</p>
                            <p className="text-arial-small text-brand-blue-main">Swipe access card at main entrance, then use elevator to B2</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center p-4 bg-emerald-50/90 rounded-[12px] border border-emerald-100/50 backdrop-blur-md">
                        <div className="text-green-main text-small-bold">
                            <ShieldCheck size={20} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-green-main text-small-bold">Security</p>
                            <p className="text-green-main text-arial-small">CCTV monitored, Motion sensors active</p>
                        </div>
                    </div>
                </div>

                {/* Allocation Details Section */}
                <h2 className="heading-medium-semibold mb-4">Allocation Details</h2>
                <hr className="border-white mb-5" />

                <div className="grid grid-cols-2 gap-y-6 mb-8">
                    {allocationDetailsData.map((item, idx) => (
                        <div key={idx}>
                            <label className="text-small-regular mb-[2px] block">{item.label}</label>
                            {item.currency ? (
                                <div className="flex items-baseline gap-1">
                                    <span className="body-regular uppercase">{item.currency}</span>
                                    <p className="body-regular">{item.value}</p>
                                </div>
                            ) : (
                                <p className="body-regular">{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Stored Items Section */}
                <h2 className="heading-medium-semibold mb-4">Stored Items</h2>
                <hr className="border-white/30 mb-5" />

                <div className="flex flex-col gap-3 mb-8">
                    {storedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-white rounded-[12px]  hover:bg-white/10 transition-colors cursor-default shadow-sm group">
                            <div className="flex items-center gap-3">
                                <Box size={18} className="text-white/70 group-hover:text-white transition-colors" />
                                <p className="text-small-regular">{item.name}</p>
                            </div>
                            <div className="flex items-center gap-1.5  px-3 py-1">
                                <span className="text-small-regular uppercase tracking-wider">Qty:</span>
                                <span className="text-small-regular">{item.qty}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Documents & Contracts Section */}
                <h2 className="heading-medium-semibold mb-4">Documents and Contracts</h2>
                <hr className="border-white mb-5" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {documents.map((doc, idx) => (
                        <div key={idx} className="flex relative items-center justify-between p-4 border border-white/30 rounded-[12px] hover:bg-white/[0.12] transition-colors cursor-pointer group shadow-sm">
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
            </div>
        </QuickActionsWrapper>
    );
}

export default Storage;
