import { Select, SelectItem, Textarea } from '@heroui/react';
import QuickActionsWrapper from '../../../common/QuickActionsWrapper';
import { CameraIcon } from 'lucide-react';

interface MaintenanceRequestFormProps {
    category: string;
}

const MaintenanceRequestForm = ({ category }: MaintenanceRequestFormProps) => {
    return (
        <QuickActionsWrapper className="w-full gap-5 bg-transparent">
            <div className="w-full space-y-5">

                {/* Category */}
                <div className="space-y-1.5">
                    <label className="text-white text-xs font-semibold tracking-wide ml-0.5">
                        Category
                    </label>
                    <Select
                        defaultSelectedKeys={[category]}
                        className="w-full"
                        renderValue={(items) =>
                            items.map((item) => (
                                <div key={item.key} className="text-white font-medium text-sm">
                                    {item.textValue}
                                </div>
                            ))
                        }
                        classNames={{
                            trigger: [
                                "bg-transparent border border-white rounded-xl min-h-[46px]",
                                "hover:!bg-white/15 transition-colors duration-200",
                                "data-[hover=true]:!bg-white/15",
                                "group-data-[focus=true]:!bg-white/10",
                                "group-data-[focus=true]:!border-0",
                                "group-data-[focus=true]:!shadow-none",
                                "data-[focus-visible=true]:!ring-0",
                                "data-[focus-visible=true]:!outline-none",
                            ].join(" "),
                            value: "text-white font-medium text-sm",
                            selectorIcon: "text-white/60",
                            innerWrapper: "text-white",
                        }}
                    >
                        <SelectItem key={category}>{category}</SelectItem>
                    </Select>
                </div>

                {/* Sub Category */}
                <div className="space-y-1.5">
                    <label className="text-white text-xs font-semibold tracking-wide ml-0.5 flex items-center gap-0.5">
                        Sub Category<span className="text-red-400">*</span>
                    </label>
                    <Select
                        placeholder="Ceiling issues"
                        defaultSelectedKeys={["ceiling"]}
                        className="w-ful"
                        renderValue={(items) =>
                            items.map((item) => (
                                <div key={item.key} className="text-white font-medium text-sm">
                                    {item.textValue}
                                </div>
                            ))
                        }
                        classNames={{
                            trigger: [
                                "bg-transparent border border-white rounded-xl min-h-[46px]",
                                "hover:!bg-white/15 transition-colors duration-200",
                                "data-[hover=true]:!bg-white/15",
                                "group-data-[focus=true]:!bg-white/10",
                                "group-data-[focus=true]:!border-0",
                                "group-data-[focus=true]:!shadow-none",
                                "data-[focus-visible=true]:!ring-0",
                                "data-[focus-visible=true]:!outline-none",
                            ].join(" "),
                            value: "text-white font-medium text-sm",
                            selectorIcon: "text-white/60",
                            innerWrapper: "text-white",
                        }}
                    >
                        <SelectItem key="ceiling" textValue="Ceiling issues">Ceiling issues</SelectItem>
                        <SelectItem key="wall" textValue="Wall painting">Wall painting</SelectItem>
                        <SelectItem key="flooring" textValue="Flooring repair">Flooring repair</SelectItem>
                        <SelectItem key="other" textValue="Other">Other</SelectItem>
                    </Select>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                    <label className="text-white text-xs font-semibold tracking-wide ml-0.5 flex items-center gap-0.5">
                        Description (Optional)<span className="text-red-400">*</span>
                    </label>
                    <Textarea
                        placeholder="Add your text"
                        minRows={6}
                        className="w-full"
                        classNames={{
                            inputWrapper: [
                                "bg-transparent border border-white rounded-xl",
                                "hover:!bg-white/15 transition-colors duration-200",
                                "data-[hover=true]:!bg-white/15",
                                "group-data-[focus=true]:!bg-white/10",
                                "group-data-[focus=true]:!border-white",
                                "group-data-[focus=true]:!shadow-none",
                                "data-[focus-visible=true]:!ring-0",
                                "data-[focus-visible=true]:!outline-none",
                                "!transition-colors",
                            ].join(" "),
                            input: "text-white placeholder:text-white text-sm resize-none",
                        }}
                    />
                </div>

                {/* Upload Image */}
                <div className="space-y-1.5 pb-2">
                    <label className="text-white text-xs font-semibold tracking-wide ml-0.5">
                        Upload Image
                    </label>
                    <div
                        className={[
                            "w-full rounded-2xl border border-white",
                            "flex flex-col items-center justify-center gap-3",
                            "cursor-pointer py-10",
                            "hover:bg-white/5 transition-colors duration-200 group",
                        ].join(" ")}
                    >
                        <div
                            className={[
                                "w-28 h-28 rounded-xl border-dashed border border-white",
                                "flex items-center justify-center",
                                "group-hover:bg-white/15 transition-colors duration-200",
                            ].join(" ")}
                        >
                            <CameraIcon
                                size={26}
                                strokeWidth={1.25}
                                className="text-white"
                            />
                        </div>
                        <span className="text-white text-sm font-medium group-hover:text-white/80 transition-colors duration-200">
                            Upload image
                        </span>
                    </div>
                </div>

            </div>
        </QuickActionsWrapper>
    );
};

export default MaintenanceRequestForm;