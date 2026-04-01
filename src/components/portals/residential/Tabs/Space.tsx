import QuickActionsWrapper from "../../../common/QuickActionsWrapper"


const Space = () => {
    return (
        <QuickActionsWrapper className="p-4">
            <div className=" w-full text-left relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="heading-medium-semibold">Unit A-1205</h2>
                    <span className="bg-white text-inter-xs px-3 py-1 rounded-full uppercase text-black">Active</span>
                </div>
                <hr className="border-white/30 mb-5" />

                <div className="flex flex-col gap-[18px]">
                    <div>
                        <label className="text-small-medium mb-2">Building</label>
                        <p className="text-regular-bold">Tower A</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Floor</label>
                        <p className="text-regular-bold">Floor 12</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Area</label>
                        <p className="text-regular-bold">Floor 12</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Bedrooms</label>
                        <p className="text-regular-bold">2 Bedrooms</p>
                    </div>
                    <div>
                        <label className="text-small-medium mb-2">Move-in Date</label>
                        <p className="text-regular-bold">Jan 15, 2026</p>
                    </div>
                </div>
            </div>
        </QuickActionsWrapper>
    )
}

export default Space