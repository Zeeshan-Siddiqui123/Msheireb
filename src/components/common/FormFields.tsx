import React from "react";
import { Select, SelectItem, Textarea, Checkbox } from "@heroui/react";
import { CameraIcon } from "lucide-react";

type InputType = "text" | "select" | "textarea" | "file" | "checkbox";

interface FormFieldProps {
    label: string;
    type?: InputType;
    placeholder?: string;
    required?: boolean;
    value?: any;
    options?: { key: string; text: string }[]; // for select
    onChange?: (value: any) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    type = "text",
    placeholder,
    required = false,
    value,
    options = [],
    onChange,
}) => {
    const requiredMark = required ? <span className="text-white">*</span> : null;

    switch (type) {
        case "select":
            return (
                <div className="space-y-1.5">
                    <label className="text-small-regular ml-0.5 flex items-center gap-0.5">
                        {label} {requiredMark}
                    </label>
                    <Select
                        placeholder={placeholder}
                        defaultSelectedKeys={[value || ""]}
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
                        {options.map((opt) => (
                            <SelectItem key={opt.key} textValue={opt.text}>
                                {opt.text}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            );

        case "textarea":
            return (
                <div className="space-y-1.5">
                    <label className="text-small-regular ml-0.5 flex items-center gap-0.5">
                        {label} {requiredMark}
                    </label>
                    <Textarea
                        placeholder={placeholder}
                        minRows={6}
                        className="w-full"
                        classNames={{
                            inputWrapper: [
                                "bg-transparent border border-white rounded-xl",
                                "hover:!bg-white/15 transition-colors duration-200",
                                "group-data-[focus=true]:!bg-white/10",
                                "group-data-[focus=true]:!border-white",
                                "group-data-[focus=true]:!shadow-none",
                                "data-[focus-visible=true]:!ring-0",
                                "data-[focus-visible=true]:!outline-none",
                                "!transition-colors",
                            ].join(" "),
                            input: "text-white placeholder:text-white text-sm resize-none",
                        }}
                        value={value}
                        onChange={(e) => onChange?.(e.currentTarget.value)}
                    />
                </div>
            );

        case "file":
            return (
                <div className="space-y-1.5 pb-2">
                    <label className="text-small-regular ml-0.5 text-white">
                        {label} {requiredMark}
                    </label>
                    <div className="w-full rounded-2xl border border-white flex flex-col items-center justify-center gap-3 cursor-pointer py-10 hover:bg-white/5 transition-colors duration-200 group">
                        <div className="w-28 h-28 rounded-xl border-dashed border border-white flex items-center justify-center group-hover:bg-white/15 transition-colors duration-200">
                            <CameraIcon size={26} strokeWidth={1.25} className="text-white" />
                        </div>
                        <span className="text-white text-sm font-medium group-hover:text-white/80 transition-colors duration-200">
                            {placeholder || "Upload image"}
                        </span>
                    </div>
                </div>
            );

        case "checkbox":
            return (
                <div className="pt-2">
                    <Checkbox
                        isSelected={!!value}
                        onValueChange={(isSelected) => onChange?.(isSelected)}
                        classNames={{
                            label: "text-white/80 text-[13px] ml-1",
                            wrapper: "before:border-white/50"
                        }}
                    >
                        {label}
                    </Checkbox>
                </div>
            );

        case "text":
        default:
            return (
                <div className="space-y-1.5">
                    <label className="text-small-regular ml-0.5 flex items-center gap-0.5">
                        {label} {requiredMark}
                    </label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange?.(e.target.value)}
                        className="w-full bg-transparent border border-white rounded-xl h-11 px-3 text-white placeholder:text-white text-sm hover:!bg-white/15 transition-colors duration-200 focus:bg-white/10 focus:border-white focus:shadow-none focus:outline-none"
                    />
                </div>
            );
    }
};

export default FormField;