import { Select, SelectItem, Textarea, Checkbox } from "@heroui/react";
import { Pencil } from "lucide-react";
import { useState } from "react";
import BaseCard, { CardBody, CardHeader } from "../../../common/BaseCard";
import GlassButton from "../../../common/GlassButton";

const selectClassNames = {
  trigger: [
    "bg-white/10 border border-white/40 rounded-xl min-h-[46px]",
    "hover:!bg-white/15 transition-colors duration-200",
    "data-[hover=true]:!bg-white/15",
    "group-data-[focus=true]:!bg-white/10",
    "group-data-[focus=true]:!border-white/60",
    "group-data-[focus=true]:!shadow-none",
    "data-[focus-visible=true]:!ring-0",
    "data-[focus-visible=true]:!outline-none",
  ].join(" "),
  value: "text-white text-sm",
  selectorIcon: "text-white/60",
  innerWrapper: "text-white",
};

interface Step2Props {
  onNext: () => void;
  onCancel: () => void;
}

const Step2PersonalInfo = ({ onNext, onCancel }: Step2Props) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="space-y-4 w-full">
      {/* Title */}
      <h2 className="heading-medium-semibold text-white text-center">My Personal Information</h2>

      {/* Contact Method */}
      <BaseCard>
        <CardBody className="space-y-3">

          {/* Contact Method dropdown */}
          <div className="space-y-1.5">
            <label className="text-small-regular text-white/80">Contact Method</label>
            <Select
              defaultSelectedKeys={["email"]}
              classNames={selectClassNames}
              renderValue={(items) =>
                items.map((item) => (
                  <div key={item.key} className="text-white text-sm">{item.textValue}</div>
                ))
              }
            >
              <SelectItem key="email" textValue="Email Contact">Email Contact</SelectItem>
              <SelectItem key="phone" textValue="Phone Contact">Phone Contact</SelectItem>
              <SelectItem key="in-person" textValue="In Person">In Person</SelectItem>
            </Select>
          </div>

          {/* Email display row */}
          <div className="flex items-center justify-between bg-white/10 border border-white/40 rounded-xl px-4 py-3">
            <span className="text-small-regular text-white">svarghese@msheireb.com</span>
            <button className="text-white/60 hover:text-white transition-colors">
              <Pencil size={14} />
            </button>
          </div>

          {/* Add Comment */}
          <div className="space-y-1.5">
            <label className="text-small-regular text-white/80">Add Comment</label>
            <Textarea
              placeholder="Kindly specify the date and time you wish to recieve your second visit and any other relevant details:"
              minRows={6}
              className="w-full"
              classNames={{
                inputWrapper: [
                  "bg-white/10 border border-white/40 rounded-xl",
                  "hover:!bg-white/15 transition-colors duration-200",
                  "data-[hover=true]:!bg-white/15",
                  "group-data-[focus=true]:!bg-white/10",
                  "group-data-[focus=true]:!border-white/60",
                  "group-data-[focus=true]:!shadow-none",
                  "data-[focus-visible=true]:!ring-0",
                  "data-[focus-visible=true]:!outline-none",
                ].join(" "),
                input: "text-white placeholder:text-white/40 text-sm resize-none",
              }}
            />
          </div>

        </CardBody>
      </BaseCard>

      {/* Terms */}
      <Checkbox
        isSelected={accepted}
        onValueChange={setAccepted}
        classNames={{
          label: "text-small-regular text-white/80",
          wrapper: "border-white/50 before:border-white/50 after:bg-white/80",
        }}
      >
        Accept Terms and Conditions
      </Checkbox>

      {/* Buttons */}
      <div className="flex items-center gap-3 justify-center pt-2">
        <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onCancel}>
          Cancel
        </GlassButton>
        <GlassButton className="w-32" buttonClassName="py-2.5" onClick={onNext}>
          Next
        </GlassButton>
      </div>
    </div>
  );
};

export default Step2PersonalInfo;
