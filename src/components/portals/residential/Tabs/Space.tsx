
const Space = () => {
    return (
        <div className="mt-4 w-full bg-white/10 rounded-lg p-6 border border-white/20 backdrop-blur-sm shadow-lg text-left relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[17px] font-bold text-white">Unit A-1205</h2>
                <span className="bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
            </div>
            <hr className="border-white/30 mb-5" />

            <div className="flex flex-col gap-[18px]">
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Building</label>
                    <p className="font-bold text-white text-[15px]">Tower A</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Floor</label>
                    <p className="font-bold text-white text-[15px]">Floor 12</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Area</label>
                    <p className="font-bold text-white text-[15px]">Floor 12</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Bedrooms</label>
                    <p className="font-bold text-white text-[15px]">2 Bedrooms</p>
                </div>
                <div>
                    <label className="text-white/80 text-[12px] font-semibold mb-[2px] block">Move-in Date</label>
                    <p className="font-bold text-white text-[15px]">Jan 15, 2026</p>
                </div>
            </div>
        </div>
    )
}

export default Space